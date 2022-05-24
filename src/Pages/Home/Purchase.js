import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // const quantity = product?.availableQuantity;

  const [user] = useAuthState(auth);
  const { minimumQuantity, availableQuantity } = product;
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleOrder = (event) => {
    event.preventDefault();
    const minQuantity = minimumQuantity;
    const maxQuantity = availableQuantity;
    const userName = event.target.name.value;
    const product = event.target.product.value;
    const inputQuantity = event.target.quantity.value;
    if (inputQuantity < minQuantity) {
      toast.error(`Minimum Order ${minQuantity} pcs`);
    } else if (inputQuantity > maxQuantity) {
      toast.error(`Maximum Order ${maxQuantity} pcs`);
    }
    console.log(userName, product);
    event.target.reset();
  };

  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table table-bordered w-full">
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

      <div>
        <h2 className="text-2xl font-bold text-center">
          To Complete Your Order Plase Fill Up the Form Below:
        </h2>
        <form
          onSubmit={handleOrder}
          className="grid grid-cols-1 gap-3 justify-items-center my-2"
        >
          <input
            type="text"
            name="product"
            readOnly
            value={product.name}
            class="input font-bold input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="name"
            readOnly
            value={user?.displayName || ""}
            class="input font-bold input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            readOnly
            value={user?.email || ""}
            class="input font-bold input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="address"
            placeholder="Your address"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone number"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="number"
            name="quantity"
            placeholder="order quantity"
            class="input input-bordered w-full max-w-xs"
          />

          <input
            type="submit"
            value="submit"
            class="btn btn-primary w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;
