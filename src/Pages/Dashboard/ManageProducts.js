import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteModal from "./DeleteModal";
import ProductRow from "./ProductRow";

const ManageProducts = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://infinite-ocean-88607.herokuapp.com/product", {
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
                setDeleteProduct={setDeleteProduct}
              ></ProductRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteModal
          deleteProduct={deleteProduct}
          refetch={refetch}
          setDeleteProduct={setDeleteProduct}
        ></DeleteModal>
      )}
    </div>
  );
};

export default ManageProducts;
