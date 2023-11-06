import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/LogDetail.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsPencilSquare, BsFillTrashFill } from "react-icons/bs";
// import { useAuthContext } from "../hooks/useAuthContext";
import Moment from "moment";

const LogDetail = () => {
  const [backendData, setBackendData] = useState([{}]);
  const logId = useParams();

  //production url https://shiftlog-backend.onrender.com/api/shiftlog/:id
  //testing url /api/shiftlog/:id
  useEffect(() => {
    fetch(
      `https://shiftlog-backend.onrender.com/api/shiftlog/api/shiftlog/${logId.id}`,
      {
        headers: {},
      }
    )
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="log-detail-container">
        <div className="log-detail-card">
          <div className="log-detail-card-icons">
            <Link to="/">{<AiOutlineArrowLeft />}</Link>
            {/* <Link to={`/update/${backendData._id}`}>{<BsPencilSquare />}</Link> */}
            <Link to={`/delete/${backendData._id}`}>{<BsFillTrashFill />}</Link>
          </div>

          <h1>
            {Moment(backendData.date).format("MM DD YYYY")} |
            {backendData.log_name}
          </h1>
          <p>Tickets: {backendData.ticket}</p>
          <p>Walkthrough: {backendData.walkthrough}</p>
          <p>Critical Site Updates: {backendData.critical_updates}</p>
          <p>
            Ticket Updates:{" "}
            <div
              dangerouslySetInnerHTML={{ __html: backendData.ticket_updates }}
            ></div>
          </p>
        </div>
      </div>
    </>
  );
};

export default LogDetail;
