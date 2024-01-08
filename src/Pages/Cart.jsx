import React from "react";
import "../Styles/cart.css";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { motion } from "framer-motion";
import { cartAction } from "../Redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartitems);
  // console.log(cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="shopping cart"></CommonSection>
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems && cartItems.length === 0 ? (
                <h2>no added cart items</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <motion.th>Delete</motion.th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems &&
                      cartItems.map((item, index) => (
                        <Tr item={item} key={index} />
                      ))}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                  SubTotal
                  <span className="fs-4 fw-bold">${totalAmount}</span>
                </h6>
              </div>
              <p className="fs-6 mt-2">
                taxes and shipping will calculate in checkout
              </p>
              <div>
                <button className="buy__btn w-100 mt-3">
                  <Link to="/shop">Continue Shopping</Link>
                </button>
                <button className="buy__btn w-100 mt-3 ">
                  <Link to="/checkout">Check Out</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = ({ item }) => {
  const dispatch = useDispatch();
  const deleteProduct = () => {
    dispatch(cartAction.deleteItem(item.id));
  };
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <motion.i
          class="ri-delete-bin-line"
          whileTap={{ scale: 1.2 }}
          onClick={deleteProduct}
        ></motion.i>
      </td>
    </tr>
  );
};
export default Cart;
