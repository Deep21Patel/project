import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
// import Products from "../assets/data/products";
import Helmet from "../Components/Helmet/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import "../Styles/productDetails.css";
import ProductsList from "../Components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartAction } from "../Redux/Slices/cartSlice";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { db } from "../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import useGetData from "../custom-hooks/useGetData";
function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [rating, setRating] = useState(null);
  // const product = Products.find((item) => item.id === id);
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();
  const [tab, setTab] = useState("desc");
  const docRef = doc(db, "products", id);
  const { data: Products } = useGetData("products");
  useEffect(() => {
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct(docSnap.data());
      } else {
        console.log("no product");
      }
    };
    getProduct();
  }, []);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    shortDesc,
    description,
    category,
  } = product;
  const relatedProducts = Products.filter((item) => item.category === category);

  const subHandler = (e) => {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success("Review Submmited");
  };

  const addToCart = () => {
    dispatch(
      cartAction.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product added successfully");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);
  return (
    <>
      <Helmet title={productName}>
        <CommonSection title={productName} />

        <section className="pt-0">
          <Container>
            <Row>
              <Col lg="6">
                <img src={imgUrl} alt="" />
              </Col>

              <Col lg="6">
                <div className="product_details">
                  <h2>{productName}</h2>
                </div>
                <div className="product_rating d-flex align-item-center gap-5 mb-3">
                  <div>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-fill"></i>
                    </span>
                    <span>
                      <i class="ri-star-half-s-fill"></i>
                    </span>
                  </div>
                  <p>({avgRating} ratings)</p>
                </div>
                <div className="d-flex align-items-center gap-5">
                  <span className="product_price">${price}</span>
                  <span>Category : {category}</span>
                </div>

                <p className="mt-3">{shortDesc}</p>

                <button className="buy_btn" onClick={addToCart}>
                  Add to cart
                </button>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="tab_wrapper d-flex align-items-center gap-5">
                  <h6
                    className={`${tab === "desc" ? " " : ""}`}
                    onClick={() => setTab("desc")}
                  >
                    Descripiton
                  </h6>
                  <h6
                    className={`${tab === "rev" ? "active_tab" : ""}`}
                    onClick={() => setTab("rev")}
                  >
                    {/* Reviewa({reviews.length}) */}
                  </h6>
                </div>
                {tab === "desc" ? (
                  <div className="tab_content mt-4">
                    <p>{description}</p>
                  </div>
                ) : (
                  <div className="product_review">
                    <div className="review_wrapper">
                      <ul className="mt-5">
                        {reviews?.map((item, index) => (
                          <li key={index}>
                            <h6>deep</h6>
                            <span>{item.rating} (rating)</span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="review_form">
                      <h4>Leave Your Experince</h4>
                      <form action="" on onSubmit={subHandler}>
                        <div className="form_group">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                          />
                        </div>
                        <div className="form_group d-flex align-items-center gap-5 rating_g">
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            2<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            3<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            4<i class="ri-star-s-fill"></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            5<i class="ri-star-s-fill"></i>
                          </motion.span>
                        </div>
                        <div className="form_group">
                          <textarea
                            ref={reviewMsg}
                            type="text"
                            rows={4}
                            placeholder="Review Message...."
                          />
                        </div>
                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type="submit"
                          className="buy__btn"
                        >
                          Submit
                        </motion.button>
                      </form>
                    </div>
                  </div>
                )}
              </Col>
              <Col lg="12" className="mt-5">
                <h2 className="related_title"> you might also like</h2>
              </Col>
              <ProductsList data={relatedProducts} />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
}

export default ProductDetails;
