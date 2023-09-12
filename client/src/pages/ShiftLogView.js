import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/ShiftLogView.css";

const ShiftLogView = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("100.20.92.101/api/shiftlog")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  console.log(backendData);

  return (
    <>
      <Navbar />

      <div className="shift-container">
        <table className="shift-table">
          <tr>
            <th>Date</th>
            <th>Ticket</th>
            <th>Customer</th>
            <th>Walkthrough</th>
            <th>Alarms</th>
            <th>Notes</th>
          </tr>

          {backendData.map((shift, i) => (
            <tr key={i}>
              <td>{shift.date}</td>
              <td>{shift.ticket}</td>
              <td>{shift.customer}</td>
              <td>{shift.walkthrough}</td>
              <td>{shift.alarms}</td>
              <td>{shift.notes}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
};

export default ShiftLogView;
