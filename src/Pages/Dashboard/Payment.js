import React from "react";
import { useParams } from "react-router-dom";

const Payment = () => {
  const { id } = useParams();
  return (
    <div>
      <h6>payment for {id}</h6>
    </div>
  );
};

export default Payment;
