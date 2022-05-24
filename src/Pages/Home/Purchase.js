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
      <div class="overflow-x-auto">
        <table class="table   w-full">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Avatar</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Minimum Order Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{product.name}</th>
              <td>
                <div class="avatar">
                  <div class="w-16 rounded-full">
                    <img src={product.img} alt={product.name} />
                  </div>
                </div>
              </td>
              <td>{product.price}</td>
              <td>{product.availableQuantity}</td>
              <td>{product.minimumQuantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Purchase;
