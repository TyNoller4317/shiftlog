import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import CreateLogModal from "../pages/CreateLogModal";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Shiftlog | Den3</Link>
        </div>
        <div className="add-log">
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/create-log">Create Log</Link>
                {/* <CreateLogModal /> */}
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/updates">Updates</Link>
              </Dropdown.Item>
              {/* <Dropdown.Divider />
              <Dropdown.Item>
                <Link onClick={handleClick}>Logout</Link>
              </Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbar;
