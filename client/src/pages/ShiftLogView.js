import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/ShiftLogView.css";
import { Link } from "react-router-dom";

const ShiftLogView = () => {
  const [backendData, setBackendData] = useState([{}]);
  const [deleteData, setDeleteData] = useState([{}]);

  //production url https://shiftlog-backend.onrender.com/api/shiftlog
  //testing url /api/shiftlog
  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/shiftlog")
      .then((response) => response.json())
      .then((data) => setBackendData(data));
  }, []);

  const onDelete = (id) => {
    fetch(`/api/shiftlog/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Status 200 OK");
        } else {
          throw new Error("Cannot Delete");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
              <td>
                <Link to={`/${shift._id}`}>{shift.date}</Link>
              </td>
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
