import React, { useState } from "react";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../styles/CreateLogView.css";
import { useCreate } from "../hooks/useCreate";

function CreateLogModal() {
  const [open, setOpen] = React.useState(false);
  const [ticket, setTicket] = useState();
  const [walkthrough, setWalkthrough] = useState();
  const [critical_updates, setCriticalUpdates] = useState();
  const [ticket_updates, setTicketUpdates] = useState();
  const [log_name, setLogName] = useState();
  const [date, setDate] = useState();
  const { create_shift, isLoading, error } = useCreate();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await create_shift(
      ticket,
      walkthrough,
      critical_updates,
      ticket_updates,
      log_name,
      date
    );

    setOpen(false);
    navigate("/shiftlog");
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 600,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          >
            Create Shift Log
          </Typography>
          <form method="POST" className="createForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={log_name}
              onChange={(e) => setLogName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Tickets"
              value={ticket}
              onChange={(e) => setTicket(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Walkthrough"
              value={walkthrough}
              required
              onChange={(e) => setWalkthrough(e.target.value)}
            />
            <input
              type="text"
              placeholder="Critical Site Updates"
              value={critical_updates}
              onChange={(e) => setCriticalUpdates(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Ticket Updates"
              value={ticket_updates}
              onChange={(e) => setTicketUpdates(e.target.value)}
              required
            />
            <input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input type="submit" className="submit" />
          </form>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

export default CreateLogModal;
