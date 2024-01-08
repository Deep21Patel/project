import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import serviceData from "../assets/data/serviceData";
import "./Services.css";

function Services(props) {
  return (
    <>
      <Container>
        <Row>
          {serviceData.map((item, index) => (
            <Col lg="3" md="4" className="mt-5" key={index}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="service_item"
                style={{ background: `${item.bg}` }}
              >
                <span>
                  <i class={item.icon}></i>
                </span>
                <div>
                  <h3> {item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Services;
