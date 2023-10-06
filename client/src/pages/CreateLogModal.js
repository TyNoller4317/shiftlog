import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../styles/CreateLogView.css";
import { useCreate } from "../hooks/useCreate";

import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Textarea from "@mui/joy/Textarea";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";

function CreateLogModal() {
  const [open, setOpen] = React.useState(false);
  const [ticket, setTicket] = useState();
  const [walkthrough, setWalkthrough] = useState();
  const [critical_updates, setCriticalUpdates] = useState();
  const [ticket_updates, setTicketUpdates] = useState();
  const [log_name, setLogName] = useState();
  const { create_shift, isLoading, error } = useCreate();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await create_shift(
      ticket,
      walkthrough,
      critical_updates,
      ticket_updates,
      log_name
    );

    console.log("working");
    setOpen(false);
    navigate("/");
    window.location.reload(false);
  };

  return (
    <React.Fragment>
      <Link onClick={() => setOpen(true)}>Create Log</Link>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog>
          <DialogTitle>Create New Shift Log</DialogTitle>
          <DialogContent>Fill in information about your shift.</DialogContent>
          <form method="POST">
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  autoFocus
                  required
                  value={log_name}
                  onChange={(e) => setLogName(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Tickets</FormLabel>
                <Input
                  required
                  value={ticket}
                  onChange={(e) => setTicket(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Walkthrough</FormLabel>
                <Input
                  required
                  value={walkthrough}
                  onChange={(e) => setWalkthrough(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Critical Site Updates</FormLabel>
                <Input
                  required
                  value={critical_updates}
                  onChange={(e) => setCriticalUpdates(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Ticket Updates</FormLabel>
                <Textarea
                  required
                  value={ticket_updates}
                  onChange={(e) => setTicketUpdates(e.target.value)}
                />
              </FormControl>
              <Button type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}

export default CreateLogModal;
