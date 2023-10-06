import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/UpdatesView.css";
import { useUpdateData } from "../hooks/useUpdateData";

function UpdatesView() {
  const updateData = useUpdateData();

  return (
    <>
      <Navbar />
      <div className="updates-container">
        {updateData.map((up, i) => (
          <div className="update" key={i}>
            <h4 className="update-title">{up.title}</h4>
            <p className="update-information">{up.update}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default UpdatesView;
