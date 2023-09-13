import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const CreateLogView = () => {
  const [ticket, setTicket] = useState();
  const [customer, setCustomer] = useState();
  const [walkthrough, setWalkthrough] = useState();
  const [alarms, setAlarms] = useState();
  const [notes, setNotes] = useState();
  const [date, setDate] = useState();

  const [backendData, setBackendData] = useState();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    //production https://shiftlog-backend.onrender.com/api/shiftlog
    //test /api/shiftlog
    fetch("https://shiftlog-backend.onrender.com/api/shiftlog", {
      method: "POST",
      body: JSON.stringify({
        ticket,
        customer,
        walkthrough,
        alarms,
        notes,
        date,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          console.log("Status 200 Ok");
          navigate("/");
        } else {
          throw new Error("Error creating log");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="form-container">
        <h1>Create ShiftLog</h1>
        <form method="POST" className="loginForm" onSubmit={onSubmit}>
          <input
            type="text"
            name="ticket"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
            placeholder="Ticket"
            required
          />
          <input
            type="text"
            name="customer"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            placeholder="Customer"
            required
          />
          <input
            type="text"
            name="walkthrough"
            value={walkthrough}
            onChange={(e) => setWalkthrough(e.target.value)}
            placeholder="Walkthrough"
            required
          />
          <input
            type="text"
            name="alarms"
            value={alarms}
            onChange={(e) => setAlarms(e.target.value)}
            placeholder="Alarms"
            required
          />
          <input
            type="text"
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes"
            required
          />
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input type="submit" value="Create" className="submit" />
        </form>
      </div>
    </>
  );
};

export default CreateLogView;
