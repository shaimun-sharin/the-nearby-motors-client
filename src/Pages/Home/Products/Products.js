import React, { useEffect, useState } from "react";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="products">
      {products.map((item) => (
        <Product key={item._id} item={item}></Product>
      ))}
    </div>
  );
};

export default Products;
