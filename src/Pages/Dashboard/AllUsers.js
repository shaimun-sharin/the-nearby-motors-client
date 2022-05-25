import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const AllUsers = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h3 className="text-2xl">All users {users.length}</h3>
      {/* <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>User Email</th>
              <th>Admin</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserRow key={user._id} user={user} refetch={refetch}></UserRow>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default AllUsers;
