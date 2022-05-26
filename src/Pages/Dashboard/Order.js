import React from "react";

const Order = ({ order }) => {
  const { product, client, paid } = order;
  return (
    <tr>
      <td>{product}</td>

      <td>{client}</td>
      <td>
        {!paid && <button className="btn btn-xs btn-error">Cancel</button>}
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
