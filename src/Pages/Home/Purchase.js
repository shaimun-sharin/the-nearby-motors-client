import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <div class="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={product.img} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-xl font-bold">
            Product name-{product.name}
          </h2>
          <h3 className="font-bold">Price-{product.price}</h3>
          <h3 className="font-bold">
            Available Quantity-{product.availableQuantity}
          </h3>
          <h3 className="font-bold">
            Minimum order Quantity{product.minimumQuantity}
          </h3>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
