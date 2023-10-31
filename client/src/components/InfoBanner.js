//imports
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import "../styles/InfoBanner.css";
import Moment from "moment";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

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

  const handleClick = () => {
    setOpenAlert(!openAlert);
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = async () => {
    await create_update(title, update);
  };

  const handleEditingUpdate = () => {
    fetch(`https://shiftlog-backend.onrender.com/api/updates/${updateId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });
  };

  console.log(updateData);

  return isEditing ? (
    <>
      <Alert className="updates-section">
        <div className="alert-title">
          <div className="alert-title-1">
            <label>Title: </label>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="alert-icons">
            <BiExit className="icon" onClick={handleEdit} />
          </div>
        </div>
        <label>Update: </label>
        <ReactQuill
          theme="snow"
          value={update}
          onChange={setUpdate}
          className="editor"
        />
        {/* <textarea
          name="update"
          placeholder="Update"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          required
        /> */}
        <button
          type="submit"
          className="updateSubmitBtn"
          onClick={handleUpdate}
        >
          Create Update
        </button>
      </Alert>
    </>
  ) : (
    <>
      <Alert className="updates-section">
        <div className="updates-section-title">
          <h4>
            Update - {Moment(data[0].date).format("MM-DD-YYYY")} |{" "}
            {data[0].title}
          </h4>
          <div className="alert-icons">
            <AiOutlinePlus className="icon" onClick={handleEdit} />
            {/* <AiFillEdit className="icon" /> */}
          </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data[0].update }}></div>
        {/* <p>{data[0].update}</p> */}
      </Alert>
    </>
  );
}

export default InfoBanner;
