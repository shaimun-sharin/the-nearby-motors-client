import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const ManageProducts = () => {
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("http://localhost:5000/product", {
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
      <h4>{products.length}</h4>
    </div>
  );
};

export default ManageProducts;
