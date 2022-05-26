import React, { useState } from "react";

const Order = ({ order, refetch, setDeleteOrder }) => {
  const [buttonText, setButtonText] = useState("pending");
  const { product, client, paid, _id } = order;

  function handleClick() {
    setButtonText("Shipped");
  }

  return (
    <tr>
      <td>{product}</td>

      <td>{client}</td>
      <td>
        {!paid && (
          <label
            onClick={() => setDeleteOrder(order)}
            for="delete-modal"
            class="btn btn-xs btn-error"
          >
            Delete
          </label>
        )}
        {paid && (
          <div className="font-bold">
            <button onClick={handleClick} className=" btn btn-primary btn-xs">
              {buttonText}
            </button>
            <p>
              <span className="text-success">Paid</span>
            </p>
          </div>
        )}
      </td>
    </tr>
  );
};

export default Order;
