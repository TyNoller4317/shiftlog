import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onSubmit = (e) => {
    e.preventDefault();

    fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
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
          throw new Error("Error logging in please try again!");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again!");
      });
  };

  return (
    <>
      <Navbar />

      <div className="form-container">
        <h1>Login</h1>
        <form method="POST" className="loginForm" onSubmit={onSubmit}>
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
          <input type="submit" value="Login" className="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
