import React from "react";
import productImg from "../../assets/images/arm-chair-01.jpg";
import "../../Styles/ProductCard.css";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartAction } from "../../Redux/Slices/cartSlice";
function ProductsCard({ item }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );
    toast.success("product added successfully");
  };
  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product_item">
        <div className="product_img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 produt_info">
          <h3 className="product_name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span className=" d-block">{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i class="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

export default ProductsCard;
