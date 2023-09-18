import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../styles/CreateLogView.css";
import { useAuthContext } from "../hooks/useAuthContext";

const UpdateLogView = () => {
  const [endData, setEndData] = useState({});
  const navigate = useNavigate();
  const { user } = useAuthContext();

  //production https://shiftlog-backend.onrender.com
  useEffect(() => {
    fetch(`/api/shiftlog/${logId.id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setEndData(data));
  }, []);

  const logId = useParams();

  const getToken = localStorage.getItem("token");

  const onSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/shiftlog/${logId.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify(endData),
    })
      .then((respone) => {
        if (respone.status === 200) {
          console.log("Status 200 OK");
          navigate("/shiftlog");
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
      <div className="create-form-container">
        <div className="create-form-title">
          <Link to="/shiftlog" className="icon">
            {<AiOutlineArrowLeft />}
          </Link>
          <h1>Update ShiftLog</h1>
        </div>

        <form method="PUT" className="createForm" onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            value={endData.log_name}
            onChange={(e) =>
              setEndData({ ...endData, log_name: e.target.value })
            }
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="ticket"
            value={endData.ticket}
            onChange={(e) => setEndData({ ...endData, ticket: e.target.value })}
            placeholder="Ticket"
            required
          />

          <input
            type="text"
            name="walkthrough"
            value={endData.walkthrough}
            onChange={(e) =>
              setEndData({ ...endData, walkthrough: e.target.value })
            }
            placeholder="Walkthrough"
            required
          />
          <input
            type="text"
            name="critial_updates"
            value={endData.critical_updates}
            onChange={(e) =>
              setEndData({ ...endData, critical_updates: e.target.value })
            }
            placeholder="Alarms"
            required
          />
          <textarea
            type="text"
            name="ticket_updates"
            value={endData.ticket_updates}
            onChange={(e) =>
              setEndData({ ...endData, ticket_updates: e.target.value })
            }
            placeholder="Notes"
            required
          />
          <input
            type="date"
            name="date"
            value={endData.date}
            onChange={(e) => setEndData({ ...endData, date: e.target.value })}
            required
          />
          <input type="submit" value="Update" className="submit" />
        </form>
      </div>
    </>
  );
};

export default UpdateLogView;
