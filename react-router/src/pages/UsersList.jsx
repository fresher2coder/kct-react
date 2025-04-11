import React from "react";
import { useUser } from "../contexts/UserContext";
import { Link, Outlet } from "react-router-dom";

function UsersList() {
  const { users } = useUser();
  return (
    <>
      <h2>List of Users:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </>
  );
}

export default UsersList;
