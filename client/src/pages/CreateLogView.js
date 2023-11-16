import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useCreate } from "../hooks/useCreate";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/CreateLogView.css";

const CreateLogView = () => {
  const [ticket, setTicket] = useState();
  const [walkthrough, setWalkthrough] = useState();
  const [critical_updates, setCriticalUpdates] = useState();
  const [ticket_updates, setTicketUpdates] = useState();
  const [log_name, setLogName] = useState();
  const { create_shift, error } = useCreate();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

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
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={log_name}
            onChange={(e) => setLogName(e.target.value)}
            required
          />
          <label>Tickets: </label>
          <input
            type="text"
            name="ticket"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
            required
          />
          <label>Walkthrough: </label>
          <input
            type="text"
            name="walkthrough"
            value={walkthrough}
            onChange={(e) => setWalkthrough(e.target.value)}
            required
          />
          <label>Critical Site Updates: </label>
          <ReactQuill
            theme="snow"
            value={critical_updates}
            onChange={setCriticalUpdates}
            className="editor"
          />
          <label>Ticket Updates: </label>
          <ReactQuill
            theme="snow"
            value={ticket_updates}
            onChange={setTicketUpdates}
            className="editor"
          />
          <input type="submit" value="Create" className="btn-submit" />
        </form>

        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
};

export default CreateLogView;
