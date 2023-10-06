import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/admin.css";

function AdminView() {
  const [userData, setUserData] = useState([{}]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="admin-container">
        <div className="users">
          <h1>Users</h1>
          {userData.map((user, i) => (
            <div className="user" key={i}>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}
        </div>
        <p>Total Number of Users: {userData.length}</p>
      </div>
    </>
  );
}

export default AdminView;
