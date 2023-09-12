import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Status 200 OK! ");
        } else {
          throw new Error("Error registering in please try again!");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error registering in please try again!");
      });
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h1>Register</h1>
        <form method="POST" className="loginForm" onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input type="submit" value="Register" className="submit" />
        </form>
      </div>
    </>
  );
};

export default Register;
