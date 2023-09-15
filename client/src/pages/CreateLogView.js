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

  const onSubmit = async (e) => {
    e.preventDefault();

    await create_shift(
      ticket,
      walkthrough,
      critical_updates,
      ticket_updates,
      log_name,
      date
    );

    navigate("/shiftlog");
  };

  return (
    <>
      <Navbar />
      <div className="create-form-container">
        <div className="create-form-title">
          <Link to="/shiftlog" className="icon">
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
          <input
            type="text"
            name="ticket_updates"
            value={ticket_updates}
            onChange={(e) => setTicketUpdates(e.target.value)}
            placeholder="Ticket Updates"
            required
          />
          <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <input
            type="submit"
            value="Create"
            className="submit"
            disabled={isLoading}
          />
        </form>

        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
};

export default CreateLogView;
