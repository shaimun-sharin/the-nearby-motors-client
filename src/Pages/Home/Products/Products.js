import React, { useEffect, useState } from "react";
import useProduct from "../../../hooks/UseProduct";
import Product from "./Product";

const Products = () => {
  const [products] = useProduct([]);
  const newProducts = [...products];
  const slicedProduct = newProducts.slice(-6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {slicedProduct.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
