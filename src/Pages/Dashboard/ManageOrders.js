import React, { useEffect, useState } from "react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://infinite-ocean-88607.herokuapp.com/order")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h5>{orders.length}</h5>
    </div>
  );
};

export default ManageOrders;
