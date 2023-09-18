import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/ShiftLogView.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Table from "@mui/joy/Table";

const ShiftLogView = () => {
  const [backendData, setBackendData] = useState([{}]);
  const { user } = useAuthContext();

  //production url https://shiftlog-backend.onrender.com/api/shiftlog
  //testing url /api/shiftlog
  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/shiftlog", {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  return (
    <>
      <Navbar />

      <Table aria-label="basic table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Tickets</th>
            <th>Walkthrough</th>
            <th>Critical Site Updates</th>
            <th>Ticket Updates</th>
          </tr>
        </thead>
        <tbody>
          {backendData.map((shift, i) => (
            <tr key={i}>
              <td>
                <Link to={`/${shift._id}`}>{shift.date}</Link>
              </td>
              <td>{shift.log_name}</td>
              <td>{shift.ticket}</td>
              <td>{shift.walkthrough}</td>
              <td>{shift.critical_updates}</td>
              <td>{shift.ticket_updates}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default ShiftLogView;
