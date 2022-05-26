import React from "react";

const ProductRow = ({ product, index, setDeleteProduct }) => {
  const { img, name } = product;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded-full">
            <img src={img} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>
        <label
          onClick={() => setDeleteProduct(product)}
          for="delete-modal"
          class="btn btn-xs btn-error"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ProductRow;
