import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import NavImage from "../images/Databank.gif";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const [userData, setUserData] = useState([{}]);
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const handleClick = () => {
    logout();
    navigate("/");
  };

  return (
    //new nav
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to="/shiftlog">Proxima Shiftlog | {user.site}</Link>
        </div>
        <div className="add-log">
          <Dropdown>
            <Dropdown.Toggle variant="" id="dropdown-basic"></Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/create-log">Create Log</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link onClick={handleClick}>Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default Navbar;
