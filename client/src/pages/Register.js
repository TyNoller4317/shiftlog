import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { signup, error, isLoading } = useSignup();

  const onSubmit = async (e) => {
    e.preventDefault();

    await signup(username, email, password);
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
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <input
            type="submit"
            value="Register"
            className="submit"
            disabled={isLoading}
          />
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </form>

        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
};

export default Register;
