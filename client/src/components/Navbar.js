import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import NavImage from "../images/Databank.gif";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

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
    <>
      <div className="nav-container">
        <div className="logo">
          <Link to="/shiftlog">
            <img src={NavImage} alt="" />| {userData[0].username}
          </Link>
        </div>
        <div className="add-log">
          <Link to="/create-log">+</Link>

          {user && (
            <Link onClick={handleClick} className="logout-btn">
              Logout
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
