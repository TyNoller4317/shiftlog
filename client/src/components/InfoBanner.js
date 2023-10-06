//imports
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

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
    fetch(`/api/updates/${updateId}`, {
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
      <Alert variant="info" className="alert">
        <div className="alert-title">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div className="alert-icons">
            <BiExit className="icon" onClick={handleEdit} />
          </div>
        </div>
        <textarea
          name="update"
          placeholder="Update"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          required
        />
        {/* <div className="select">
          <select name="importance" onChange={(e) => setColor(e.target.value)}>
            <option value="info">Normal</option>
            <option value="warning">Important</option>
            <option value="danger">Critical</option>
          </select>
        </div> */}
        <button
          type="submit"
          className="btn btn-secondary submitUpdate"
          onClick={handleUpdate}
        >
          Create Update
        </button>
      </Alert>
    </>
  ) : (
    <>
      <Alert variant="info" className="alert">
        <div className="alert-title">
          <h4>{data[0].title}</h4>
          <div className="alert-icons">
            <AiOutlinePlus className="icon" onClick={handleEdit} />
            {/* <AiFillEdit className="icon" /> */}
            {openAlert ? (
              <AiOutlineArrowUp className="icon" onClick={handleClick} />
            ) : (
              <AiOutlineArrowDown className="icon" onClick={handleClick} />
            )}
          </div>
        </div>
        <p className={openAlert ? "show" : "no-show"}>{data[0].update}</p>
      </Alert>
    </>
  );
}

export default InfoBanner;
