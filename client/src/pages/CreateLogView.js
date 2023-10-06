import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../styles/CreateLogView.css";
import { useCreate } from "../hooks/useCreate";

const CreateLogView = () => {
  const [ticket, setTicket] = useState();
  const [walkthrough, setWalkthrough] = useState();
  const [critical_updates, setCriticalUpdates] = useState();
  const [ticket_updates, setTicketUpdates] = useState();
  const [log_name, setLogName] = useState();
  const [date, setDate] = useState();
  const { create_shift, isLoading, error } = useCreate();
  const navigate = useNavigate();
  const currentDate = new Date();
  let currentDay = String(currentDate.getDate()).padStart(2, "0");
  let currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  let currentYear = currentDate.getFullYear();
  const fullDate = `${currentYear}-${currentMonth}-${currentDay}`;

  const onSubmit = async (e) => {
    e.preventDefault();
    // setDate(fullDate);

    await create_shift(
      ticket,
      walkthrough,
      critical_updates,
      ticket_updates,
      log_name
    );

    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="create-form-container">
        <div className="create-form-title">
          <Link to="/" className="icon">
            {<AiOutlineArrowLeft />}
          </Link>
          <h1>Create ShiftLog</h1>
        </div>

        <form method="POST" className="createForm" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={log_name}
            onChange={(e) => setLogName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="ticket"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
            placeholder="Tickets"
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
            name="critical_updates"
            value={critical_updates}
            onChange={(e) => setCriticalUpdates(e.target.value)}
            placeholder="Critical Site Updates"
            required
          />
          <textarea
            type="text"
            name="ticket_updates"
            value={ticket_updates}
            onChange={(e) => setTicketUpdates(e.target.value)}
            placeholder="Ticket Updates"
            required
          />
          {/* <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Ticket Updates"
            required
          /> */}
          <input type="submit" value="Create" className="btn-submit" />
        </form>

        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
};

export default CreateLogView;
