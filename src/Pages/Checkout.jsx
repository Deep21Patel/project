import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import "../Styles/checkout.css";
import { useSelector } from "react-redux";

function Checkout(props) {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet titel="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6>billing info</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="enter your name" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="enter your email" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="enter your number" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="enter your Street address" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="city" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty :<span>{totalQty} items</span>
                </h6>
                <h6>
                  {" "}
                  SubTotal :<span>${totalAmount}</span>
                </h6>
                <h6>
                  Shipping :<br /> Free shipping :<span>0</span>
                </h6>

                <h4>
                  Total Cost:<span>${totalAmount}</span>
                </h4>
                <button className="buy__btn bg-info auth_btn w-100 mt-5 ">
                  Place an Order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Checkout;
