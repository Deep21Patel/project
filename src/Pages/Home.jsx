import React from "react";
import { useState, useEffect } from "react";
import products from "../assets/data/products";

import Helmet from "../Components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import Services from "../Services/Services";
import ProductsList from "../Components/UI/ProductsList";
import { motion } from "framer-motion";
import "../Styles/Home.css";
import { Link } from "react-router-dom";
import Clock from "../Components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";
import useGetData from "../custom-hooks/useGetData";
const heroimg = require("../assets/images/hero-img.png");

function Home(props) {
  const { data: products, loading } = useGetData("products");
  const [TrendingProducts, setTrendingProducts] = useState([]);
  const [BestsalesProducts, setBestsalesProducts] = useState([]);
  const [MobileProducts, setmoblieProducts] = useState([]);
  const [WirelessProducts, setWirelessProducts] = useState([]);
  const [PopulerProducts, setPopulerProducts] = useState([]);

  const year = new Date().getFullYear();
  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );
    const filteredBestsalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMoblieProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopulerProducts = products.filter(
      (item) => item.category === "watch"
    );
    setTrendingProducts(filteredTrendingProducts);
    setBestsalesProducts(filteredBestsalesProducts);
    setmoblieProducts(filteredMoblieProducts);
    setWirelessProducts(filteredWirelessProducts);
    setPopulerProducts(filteredPopulerProducts);
  }, [products]);
  return (
    <>
      <Helmet title={"Home"}>
        <section className="hero_section">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero_content">
                  <p className="hero_subtitle">Tereding Product in {year} </p>
                  <h2>Make Your Interrior More & Morden</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut veniam, eveniet dolore voluptas iusto repellat omnis,
                    excepturi nam animi vero ipsa ab nihil maxime. Eaque minima
                    quo esse eius quisquam!
                  </p>
                  <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                    <Link to="shop ">SHOP NOW</Link>
                  </motion.button>
                </div>
              </Col>
              <Col lg="6" md="6">
                <img src={heroimg} alt="" />
              </Col>
            </Row>
          </Container>
        </section>
        <Services />
        <section className="trending__products">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="text-center">Trending Products</h2>
              </Col>
              <ProductsList data={TrendingProducts} />
            </Row>
          </Container>
        </section>
        <section className="best_sales">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="text-center">Best Sales </h2>
              </Col>
              <ProductsList data={BestsalesProducts} />
            </Row>
          </Container>
        </section>
        {/* <section className="timer__count">
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="clock_top-content">
                  <h4 className="fs-6 mb-2">Limited Offers</h4>
                  <h3 className="fs-6">Quality armchair</h3>
                </div>
                <Clock />
                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className="buy_btn store_btn mt-5"
                >
                  <Link to="/shop">Visit store</Link>
                </motion.button>
              </Col>
              <Col lg="6" md="6" className="text-end">
                <img src={counterImg} alt="" />
              </Col>
            </Row>
          </Container>
        </section> */}
        <section className="new_arrivals">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="text-center mb-5"> New Arrivals </h2>
              </Col>
              <ProductsList data={MobileProducts} />
              <ProductsList data={WirelessProducts} />
            </Row>
          </Container>
        </section>
        <section className="popular_category">
          <Container>
            <Row>
              <Col lg="12">
                <h2 className="text-center mb-5"> Porpuler in catergory </h2>
              </Col>
              <ProductsList data={PopulerProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
}

export default Home;
