import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Navbar = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date().getMonth();
  const currentMonth = months[date];

  return (
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Shiftlogs | Den3 </Link>
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
                <Link to="/updates">Recent Updates</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/alllogs">Previous ShiftLogs</Link>
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
