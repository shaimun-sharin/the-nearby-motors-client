import React from "react";

const Order = ({ order, refetch, setDeleteOrder }) => {
  const { product, client, paid } = order;
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
