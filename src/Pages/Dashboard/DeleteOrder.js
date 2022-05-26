import React from "react";

import { toast } from "react-toastify";

const DeleteOrder = ({ deleteOrder, refetch, setDeleteOrder }) => {
  const { _id } = deleteOrder;
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("order is deleted");
          setDeleteOrder(null);
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
            Are you sure you want to delete order?
          </h3>
          <p class="py-4">Once you delete an order you can not retrive later</p>
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

export default DeleteOrder;
