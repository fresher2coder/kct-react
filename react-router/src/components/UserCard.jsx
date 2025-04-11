import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function UserCard() {
  //users/2
  const { userId } = useParams();

  const { users } = useUser();
  const user = users.find((u) => u.id === parseInt(userId));
  return (
    <>
      <h3>{user.name}</h3>
      <h4>{user.occupation}</h4>
      <h4>{user.location}</h4>
    </>
  );
}

export default UserCard;
