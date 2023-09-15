import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/LogDetail.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
import { useAuthContext } from "../hooks/useAuthContext";

const LogDetail = () => {
  const [backendData, setBackendData] = useState([{}]);
  const logId = useParams();
  const getToken = localStorage.getItem("token");
  const { user } = useAuthContext();

  //production url https://shiftlog-backend.onrender.com/api/shiftlog/:id
  //testing url /api/shiftlog/:id
  useEffect(() => {
    fetch(`https://shiftlog-backend.onrender.com/api/shiftlog/${logId.id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  console.log(backendData);

  return (
    <>
      <Navbar />

      <div className="log-detail-container">
        <div className="log-detail-card">
          <div className="log-detail-card-icons">
            <Link to="/shiftlog">{<AiOutlineArrowLeft />}</Link>
            <Link to={`/update/${backendData._id}`}>{<BsPencilSquare />}</Link>
            <Link to={`/delete/${backendData._id}`}>{<BsFillTrashFill />}</Link>
          </div>

          <h1>
            {backendData.date} | {backendData.log_name}
          </h1>
          <p>Tickets: {backendData.ticket}</p>
          <p>Walkthrough: {backendData.walkthrough}</p>
          <p>Critical Site Updates: {backendData.critical_updates}</p>
          <p>Ticket Updates: {backendData.ticket_updates}</p>
        </div>
      </div>
    </>
  );
};

export default LogDetail;
