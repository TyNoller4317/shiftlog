import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

const DeleteLog = () => {
  const logId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://shiftlog-backend.onrender.com/api/shiftlog/api/shiftlog/${logId.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
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
