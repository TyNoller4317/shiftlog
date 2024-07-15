import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/LogDetail.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useAuthContext } from "../hooks/useAuthContext";
import Moment from "moment";
import { Container, Grid } from "@mui/material";

const LogDetail = () => {
  const [backendData, setBackendData] = useState([{}]);
  const logId = useParams();
  const { user } = useAuthContext();

  //production url https://shiftlog-backend.onrender.com/api/shiftlog/:id
  //testing url /api/shiftlog/:id
  useEffect(() => {
    fetch(`https://shiftlog-backend.onrender.com/api/shiftlog/${logId.id}`, {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <>
      <Navbar />
      <Container sx={{ paddingTop: 2, paddingBottom: 2 }}>
        <Grid container>
          <Grid item xs={12} sx={{ padding: 2 }}>
            <Link to="/" className="icon">
              {<AiOutlineArrowLeft />}
            </Link>
            {user ? (
              <Link to={`/delete/${backendData._id}`} className="icon">
                {<BsFillTrashFill />}
              </Link>
            ) : (
              <></>
            )}
          </Grid>
          <Grid item xs={12} sx={{ padding: 2 }}>
            <h1>
              {Moment(backendData.date).format("MM-DD-YYYY")} |{" "}
              {backendData.log_name}
            </h1>
          </Grid>
          <Grid item xs={12} sx={{ padding: 2 }}>
            <p>Tickets: {backendData.ticket}</p>
            <p>Walkthrough: {backendData.walkthrough}</p>
            <p>
<<<<<<< HEAD
              Critical Site Updates:{" "}
              <div
                dangerouslySetInnerHTML={{
                  __html: backendData.critical_updates,
                }}
              ></div>
            </p>
            <p>
              Ticket Updates:
              <div
                dangerouslySetInnerHTML={{ __html: backendData.ticket_updates }}
              ></div>
=======
              Critical Site Updates:
              <div
                className="ql-editor"
                dangerouslySetInnerHTML={{
                  __html: backendData.critical_updates,
                }}
              />
            </p>
            <p>
              Ticket Updates:{" "}
              <div
                className="ql-editor"
                dangerouslySetInnerHTML={{
                  __html: backendData.ticket_updates,
                }}
              />
>>>>>>> 87ffa30 (Updated the design of the shiftlog as well as adding search functionality to the shiftlogs.)
            </p>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LogDetail;

// <div className="log-detail-container">
// <div className="log-detail-card">
//   <div className="log-detail-card-icons">
//     <Link to="/">{<AiOutlineArrowLeft />}</Link>
//     {/* <Link to={`/update/${backendData._id}`}>{<BsPencilSquare />}</Link> */}
//     <Link to={`/delete/${backendData._id}`}>{<BsFillTrashFill />}</Link>
//   </div>

//   <h1>
//     {Moment(backendData.date).format("MM DD YYYY")} |
//     {backendData.log_name}
//   </h1>
//   <p>Tickets: {backendData.ticket}</p>
//   <p>Walkthrough: {backendData.walkthrough}</p>
//   <p>Critical Site Updates: {backendData.critical_updates}</p>
//   <p>
//     Ticket Updates:{" "}
//     <div
//       dangerouslySetInnerHTML={{ __html: backendData.ticket_updates }}
//     ></div>
//   </p>
// </div>
// </div>
