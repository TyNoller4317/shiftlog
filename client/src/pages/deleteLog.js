import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DeleteLog = () => {
  const logId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //production url https://shiftlog-backend.onrender.com/api/shiftlog/:id
    //testing url /api/shiftlog/:id
    fetch(`https://shiftlog-backend.onrender.com/api/shiftlog/${logId.id}`, {
      method: "DELETE",
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
