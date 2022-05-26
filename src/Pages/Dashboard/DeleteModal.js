import React from "react";
import { toast } from "react-toastify";

const DeleteModal = ({ deleteProduct, refetch, setDeleteProduct }) => {
  const { name, _id } = deleteProduct;
  const handleDelete = (id) => {
    fetch(`https://infinite-ocean-88607.herokuapp.com/product/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(` ${name} is deleted`);
          setDeleteProduct(null);
          refetch();
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="delete-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg text-red-500">
            Are you sure you want to delete ${name}
          </h3>
          <p class="py-4">
            Once you delete a Product you can not retrive later
          </p>
          <div class="modal-action">
            <button
              onClick={() => handleDelete(_id)}
              class="btn btn-xs btn-error"
            >
              Delete
            </button>
            <label for="delete-modal" class="btn btn-xs btn-success">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
