import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51L3aL2KSPk98Z2PDABUbTjBuVrkptnx3md8OSLFrEhDrjchgxYFVDQSIuuUsrKx3Ph269foswH2hFzasgEKLgZvc00PxIFuj4T"
);

const Payment = () => {
  const { id } = useParams();
  const url = `https://infinite-ocean-88607.herokuapp.com/order/${id}`;
  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div class="card w-50  max-w-md bg-base-100 shadow-xl my-12">
        <div class="card-body">
          <h2 className="text-2xl font-bold text-green-600">
            Hello dear : {order.clientName}
          </h2>
          <h2 class="card-title font-bold">
            Please Pay For-
            <span className="text-orange-700 font-bold">{order.product}</span>
          </h2>
          <p className="font-bold">Total Price - {order.price}</p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
        <div class="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
