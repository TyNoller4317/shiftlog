import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../images/team_up.svg";
import { useLogin } from "../hooks/useLogin";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const { login, error, isLoading } = useLogin();
  const { user } = useAuthContext();

  const onSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
    navigate("/shiftlog");
  };

  return (
    <>
      {/* <Navbar /> */}

      <div className="login-container">
        <div className="login-image">
          <img src={LoginImage} alt="" />
        </div>

        <div className="form-container">
          <form method="POST" className="loginForm" onSubmit={onSubmit}>
            <h1>ShiftLog Login</h1>
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
              value="Login"
              className="submit"
              disabled={isLoading}
            />
            {/* <p>
              Don't have an account?{" "}
              <Link to="/register" className="sign-up">
                Sign Up
              </Link>
            </p> */}
          </form>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default Login;
