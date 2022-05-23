import React from "react";

const Product = ({ item }) => {
  const { name, img, price, about, availableQuantity, minimumQuantity } = item;
  return (
    <div>
      <div class="card lg:max-w-lg lg:max-h-lg bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={img} alt="Motor Parts" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title font-bold text-xl">Name-{name}</h2>
          <p>Description-{about}</p>
          <h3 className="font-bold">Price/unit-{price}</h3>
          <h3 className="font-bold">Available Quantity-{availableQuantity}</h3>
          <h3 className="font-bold">Minimum Quantity-{minimumQuantity}</h3>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
