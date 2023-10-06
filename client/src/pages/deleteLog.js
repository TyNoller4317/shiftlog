import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

const DeleteLog = () => {
  const logId = useParams();
  const navigate = useNavigate();
  // const getToken = localStorage.getItem("token");
  // const { user } = useAuthContext();

  useEffect(() => {
    //production url https://shiftlog-backend.onrender.com/api/shiftlog/:id
    //testing url /api/shiftlog/:id
    fetch(`/api/shiftlog/${logId.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Shift Deleted");
          navigate("/");
        } else {
          throw new Error("Shift not deleted");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <></>;
};

export default DeleteLog;
