import React, { useEffect, useState } from "react";
import axios from "axios";
import { use } from "react";

function UserAPI() {
  const [users, setusers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(response.data);
      setusers(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="app-container">
        <h1 className="main-title">Users List</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="user-list">
            {users ? (
              users.map((user) => (
                <li key={user.id}>
                  <strong>{user.name}</strong>
                  <br />
                  {user.email}
                </li>
              ))
            ) : (
              <p>Users Not Found</p>
            )}
          </ul>
        )}
      </div>
    </>
  );
}

export default UserAPI;
