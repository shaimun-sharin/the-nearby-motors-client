import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyOrders = () => {
  const [order, setOrder] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/person?client=${user.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
          }
          return res.json();
        })
        .then((data) => setOrder(data));
    }
  }, [user]);
  return (
    <div>
      <h2>this is my orders{order.length}</h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Product</th>
                <th>Total Price</th>
                <th>Quantity</th>
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {order?.map((order, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{order.client}</td>
                  <td>{order.product}</td>
                  <td>{order.price}</td>
                  <td>{order.quantity}</td>
                  <td>
                    {order.price && !order.paid && (
                      <Link to={`/dashboard/payment/${order._id}`}>
                        <button className="btn btn-tiny btn-success">
                          pay
                        </button>
                      </Link>
                    )}
                    {order.price && order.paid && (
                      <div className="font-bold">
                        <button className=" btn btn-error btn-xs">
                          Pending
                        </button>
                        <p>
                          <span className="text-success">Paid</span>
                        </p>
                        <p>
                          Transaction id:
                          <span className="text-green-700">
                            {order.transactionId}
                          </span>
                        </p>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
