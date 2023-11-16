import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/auth/useLogout";

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
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

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
              <Dropdown.Divider />
              {user ? (
                <></>
              ) : (
                <Dropdown.Item>
                  <Link to="/admin">Admin Login</Link>
                </Dropdown.Item>
              )}
              {user ? (
                <Dropdown.Item>
                  <Link onClick={handleLogout}>Logout</Link>
                </Dropdown.Item>
              ) : (
                <></>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbar;
