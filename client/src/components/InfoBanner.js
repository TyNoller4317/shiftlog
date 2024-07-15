//imports
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "../styles/InfoBanner.css";
import Moment from "moment";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box, Grid } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";

import {
  AiFillEdit,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlinePlus,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { BiExit } from "react-icons/bi";
import { useUpdate } from "../hooks/useUpdate";
import { useUpdateData } from "../hooks/useUpdateData";
import { Editor } from "primereact/editor";

//component
function InfoBanner({ data }) {
  const [openAlert, setOpenAlert] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [update, setUpdate] = useState("");
  const { create_update } = useUpdate();
  const updateId = JSON.parse(localStorage.getItem("update"));
  const updateData = useUpdateData();
  const [color, setColor] = useState("");
  const { user } = useAuthContext();
  const [showT, setShowT] = useState(false);

  const handleClick = () => {
    setOpenAlert(!openAlert);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = async () => {
    await create_update(title, update);
  };

  const showText = () => {
    setShowT(!showT);
  };

  // const handleEditingUpdate = () => {
  //   fetch(`/api/updates/${updateId}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updateData),
  //   });
  // };

  return (
    <>
      <Box sx={{ padding: 3, backgroundColor: "#2e2c2f", color: "white" }}>
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <h4>
              Update -{" "}
              {data.length > 0
                ? Moment(data[0].date).format("MM-DD-YYYY")
                : " "}{" "}
              - {data.length > 0 ? data[0].title : " "}
            </h4>
          </Grid>
          <Grid item xs={6} textAlign={"right"}>
            <div className="alert-icons">
              <AiOutlineArrowDown onClick={showText} className="icons" />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div
              dangerouslySetInnerHTML={{
                __html: data.length > 0 ? data[0].update : " ",
              }}
              className={showT ? "" : "no-show"}
            ></div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default InfoBanner;
