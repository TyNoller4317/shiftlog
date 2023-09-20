import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "@mui/joy/Avatar";
import "../styles/ProfileView.css";

function ProfileView() {
  return (
    <>
      <Navbar />
      <div className="profile-container">
        <h4>DEN3</h4>
        <p>
          <strong>Address:</strong> 1500 Champa St, Denver CO 80202
        </p>
      </div>
    </>
  );
}

export default ProfileView;
