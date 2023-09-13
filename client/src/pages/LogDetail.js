import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/LogDetail.css";

const LogDetail = () => {
  const [backendData, setBackendData] = useState([{}]);
  const logId = useParams();

  //production url https://shiftlog-backend.onrender.com/api/shiftlog/:id
  //testing url /api/shiftlog/:id
  useEffect(() => {
    fetch(`https://shiftlog-backend.onrender.com/api/shiftlog/${logId.id}`)
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  console.log(backendData);

  return (
    <>
      <Navbar />

      <div className="log-detail-container">
        <div className="log-detail-card">
          <h1>{backendData.date}</h1>
          <p>Tickets: {backendData.ticket}</p>
          <p>Customers: {backendData.customer}</p>
          <p>Walkthrough: {backendData.walkthrough}</p>
          <p>Alarms: {backendData.alarms}</p>
          <p>Notes: {backendData.notes}</p>

          <Link to={`/update/${backendData._id}`}>Update</Link>
          <Link to={`/delete/${backendData._id}`}>Delete</Link>
        </div>
      </div>
    </>
  );
};

export default LogDetail;
