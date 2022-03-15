import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import ProductRow from "./ProductRow";

const List = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch("https://fakestoreapi.com/products");

  return (
    <>
      {products && products.map((product, i) => {
        return <ProductRow product={product} key={i} />;
      })}
    </>
  );
};

export default List;
