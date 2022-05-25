import React from "react";

const User = ({ user, refetch }) => {
  const { email } = user;
  //   const makeAdmin = () => {
  //     fetch(`https://rocky-beach-02886.herokuapp.com/user/admin/${email}`, {
  //       method: "PUT",
  //       headers: {
  //         authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //       },
  //     })
  //       .then((res) => {
  //         if (res.status === 403) {
  //           toast.error("Failed To Make An Admin");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         if (data.modifiedCount > 0) {
  //           refetch();
  //           toast.success("SuccessFully Made an Admin");
  //         }
  //       });
  //   };
  return (
    <tr>
      <td>{email}</td>
      <td>
        <button class="btn btn-xs btn-success">Make Admin</button>
      </td>
      <td>
        <button class="btn btn-xs btn-error">Remove User</button>
      </td>
    </tr>
  );
};

export default User;
