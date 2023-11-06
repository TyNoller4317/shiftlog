import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

const DeleteUpdate = () => {
  const logId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://shiftlog-backend.onrender.com/api/updates/${logId.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("Update Deleted");
          navigate("/updates");
        } else {
          throw new Error("Update not deleted");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <></>;
};

export default DeleteUpdate;
