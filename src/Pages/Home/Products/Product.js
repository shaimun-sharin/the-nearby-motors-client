import React from "react";

const Product = ({ item }) => {
  const { name, img, price, about } = item;
  return (
    <div>
      <div class="card w-96">
        <figure>
          <img src={img} alt="car!" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>{about}</p>
          <p>{price}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
