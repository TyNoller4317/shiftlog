import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">ShiftLogger</div>
        <div className="add-log">
          <a href="/create-log">+</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
