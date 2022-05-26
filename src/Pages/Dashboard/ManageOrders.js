import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Order from "./Order";

const ManageOrders = () => {
  const {
    data: order,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://infinite-ocean-88607.herokuapp.com/order", {
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
      <h3 className="text-2xl">All Orders {order.length}</h3>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Buyer</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {order?.map((order, index) => (
              <Order key={order._id} order={order} refetch={refetch}></Order>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;
