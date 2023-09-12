import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">ShiftLogger</div>
        <div className="add-log">
          <Link to="/create-log">+</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
