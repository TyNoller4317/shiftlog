import React from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing-container">
        <div className="landing-title">
          <h1>
            Welcome To <span>Databank Shiftlogs</span>
          </h1>
          <p>All of your shift log needs in one place.</p>
        </div>
        <div className="landing-links">
          <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
