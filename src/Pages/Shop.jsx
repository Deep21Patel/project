import React, { useState } from "react";
import CommoSection from "../Components/UI/CommonSection";
import Helmet from "../Components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import "../Styles/shop.css";
// import Products from "../assets/data/products";
import ProductsList from "../Components/UI/ProductsList";
import useGetData from "../custom-hooks/useGetData";
function Shop(props) {
  const { data: Products, loading } = useGetData("products");
  const [productsData, setProductsData] = useState(Products);
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue == "sofa") {
      const filterProducts = Products.filter((item) => item.category == "sofa");

      setProductsData(filterProducts);
    }
    if (filterValue == "mobile") {
      const filterProducts = Products.filter(
        (item) => item.category == "mobile"
      );

      setProductsData(filterProducts);
    }
    if (filterValue == "chair") {
      const filterProducts = Products.filter(
        (item) => item.category == "chair"
      );

      setProductsData(filterProducts);
    }
    if (filterValue == "watch") {
      const filterProducts = Products.filter(
        (item) => item.category == "watch"
      );

      setProductsData(filterProducts);
    }
    if (filterValue == "wireless") {
      const filterProducts = Products.filter(
        (item) => item.category == "wireless"
      );

      setProductsData(filterProducts);
    }
  };
  const handleSearch = (e) => {
    const searchTrem = e.target.value;

    const serchProduct = Products.filter((item) =>
      item.productName
        .toLocaleLowerCase()
        .includes(searchTrem.toLocaleLowerCase())
    );
    setProductsData(serchProduct);
  };
  return (
    <>
      <Helmet title="shop">
        <CommoSection title="Products"></CommoSection>

        <section>
          {" "}
          <Container>
            <Row>
              <Col lg="3" md="3">
                <div className="filter_widget">
                  <select onChange={handleFilter}>
                    <option value="">Filter By Catgory</option>
                    <option value="sofa">Sofa</option>
                    <option value="mobile">Mobile</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col lg="3" md="6">
                <div className="filter_widget">
                  <select>
                    <option>Sort By</option>
                    <option value="ascending">ascending</option>
                    <option value="descending">Descending</option>
                  </select>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="search_box">
                  <input
                    type="text"
                    placeholder="Search......"
                    onChange={handleSearch}
                  />
                  <span>
                    <i class="ri-search-line"></i>
                  </span>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section>
          <Container>
            <Row>
              {productsData.length == 0 ? (
                <h1>No Products Found!</h1>
              ) : (
                <ProductsList data={productsData} />
              )}
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
}

export default Shop;
