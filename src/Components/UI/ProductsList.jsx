import React from "react";
import ProductsCard from "./ProductsCard";

function ProductsList({ data }) {
  return (
    <>
      {data?.map((item, index) => (
        <ProductsCard item={item} key={index} />
      ))}
    </>
  );
}

export default ProductsList;
