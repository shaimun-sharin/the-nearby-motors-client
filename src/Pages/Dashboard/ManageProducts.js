import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
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
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <ProductRow
                key={product._id}
                product={product}
                refetch={refetch}
                index={index}
                // setDeleteDoctor={setDeleteDoctor}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
