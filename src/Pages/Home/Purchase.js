import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const Purchase = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const [user] = useAuthState(auth);
  const { minimumQuantity, availableQuantity, _id, name, img, price } = product;
  useEffect(() => {
    const url = `http://localhost:5000/product/${id}`;
    fetch(url).then((res) => res.json().then((data) => setProduct(data)));
  }, []);

  // /
  //   console.log(Number(inputQuantity));
  //   // const { availableQuantity } = product;
  //   console.log(Number(availableQuantity));
  //   const newQuantity = Number(availableQuantity) - Number(inputQuantity);
  //   console.log(newQuantity);

  //   const url = `http://localhost:5000/product/${id}`;
  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newQuantity),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // setReload(!reload);
  //       console.log("success", data);
  //     });
  // };
  const handleOrder = (event) => {
    event.preventDefault();
    const inputQuantity = event.target.quantity.value;
    const order = {
      productId: _id,
      product: name,
      clientName: user.displayName,
      client: user.email,
      quantity: inputQuantity,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };

    if (inputQuantity < minimumQuantity) {
      toast.error(`Minimum Order ${minimumQuantity} pcs`);
      event.target.reset();
    } else if (inputQuantity > availableQuantity) {
      toast.error(`Maximum Order ${availableQuantity} pcs`);
      event.target.reset();
    } else {
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("order placed successfully");
          event.target.reset();
        });
    }
    // handleQuantity(inputQuantity, availableQuantity);
  };

  return (
    <div>
      <div class="overflow-x-auto items-center">
        <table class="table  w-1/2">
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
              <th>{name}</th>
              <td>
                <div class="avatar">
                  <div class="w-16 rounded-full">
                    <img src={img} alt={name} />
                  </div>
                </div>
              </td>
              <td>{price}</td>
              <td>{availableQuantity}</td>
              <td>{minimumQuantity}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center">
          To Complete Your Order Please Fill Up the Form Below:
        </h2>
        <form
          onSubmit={handleOrder}
          className="grid grid-cols-1 gap-3 justify-items-center my-2"
        >
          <input
            type="text"
            name="product"
            readOnly
            value={name}
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
            required
            type="text"
            name="address"
            placeholder="Your address"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            required
            type="number"
            name="phone"
            placeholder="Phone number"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            required
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
