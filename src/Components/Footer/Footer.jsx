import React from "react";
import "./Footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/eco-logo.png";
function Footer(props) {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col lg="4">
              <div className="nav_wrapper">
                <div className="logo">
                  <h1>Deep</h1>
                </div>
              </div>
              <p className="footer_text mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                est obcaecati quibusdam harum{" "}
              </p>
            </Col>
            <Col lg="3">
              <div className="footer_quick-links">
                <h4 className="quick_links-title">Top Categories</h4>
                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0">
                    {" "}
                    <Link to="#">Mobile Phones</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    {" "}
                    <Link to="#">Morden sofa</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    {" "}
                    <Link to="#">Arm Chair</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    {" "}
                    <Link to="#">Smart watches</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="2">
              {" "}
              <div className="footer_quick-links">
                <h4 className="quick_links-title"> Useful Links</h4>
                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0">
                    {" "}
                    <Link to="/shop"> Shop</Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    {" "}
                    <Link to="/cart">Cart </Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    {" "}
                    <Link to="/login">Login </Link>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0">
                    {" "}
                    <Link to="#">Privacy Policy</Link>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="3" className="footer_contact">
              <div className="footer_quick-links">
                <h4 className="quick_links-title"> Contact </h4>
                <ListGroup className="mb-3">
                  <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2 ">
                    <span>
                      <i class="ri-map-pin-line"></i>
                    </span>
                    <p>123 ZindaBazzr,sylhet,india</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2 ">
                    {" "}
                    <span>
                      <i class="ri-phone-line"></i>
                    </span>
                    <p>+918141345233</p>
                  </ListGroupItem>
                  <ListGroupItem className="ps-0 border-0  d-flex align-items-center gap-2 ">
                    {" "}
                    <span>
                      <i class="ri-mail-line"></i>
                    </span>
                    <p>deeppatel04881@gmail.com</p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
            <Col lg="12">
              <p className="footer_copyright text-center">
                Copyright {year} developed by Deep. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Footer;
