import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles/AdminDashboard.css";
import { useUpdate } from "../hooks/useUpdate";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUserData } from "../hooks/useUserData";
import { useAllShifts } from "../hooks/useAllShifts";
import { useUpdateData } from "../hooks/useUpdateData";
import { fontWeight } from "@mui/system";

function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [update, setUpdate] = useState("");
  const { create_update } = useUpdate();
  const { user } = useAuthContext();
  const userData = useUserData();
  const shiftData = useAllShifts();
  const updateData = useUpdateData();

  let userCount = {
    chris: 0,
    tyler: 0,
    jose: 0,
    james: 0,
  };

  shiftData.forEach((item) => {
    if (item["log_name"] == "Christopher Kettle") {
      userCount["chris"] = userCount["chris"] + 1;
    } else if (item["log_name"] == "Tyler Noller") {
      userCount["tyler"] = userCount["tyler"] + 1;
    } else if (item["log_name"] == "Jose Villalobos") {
      userCount["jose"] = userCount["jose"] + 1;
    } else if (item["log_name"] == "James Jackson") {
      userCount["james"] = userCount["james"] + 1;
    }
  });

  //create updating once click create update
  const handleUpdate = async () => {
    await create_update(title, update);
  };

  return (
    <>
      <Navbar />

      <Box sx={{}}>
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {" "}
            <div className="metric-container">
              <h1>Site Metrics</h1>
              <div className="metrics">
                <div className="metric">
                  <p>{userData.length}</p>
                  <p>Users</p>
                </div>
                <div className="metric">
                  <p>{shiftData.length}</p>
                  <p>ShiftLogs</p>
                </div>
                <div className="metric">
                  <p>{updateData.length}</p>
                  <p>Updates</p>
                </div>
              </div>
            </div>
          </Grid>
          <Divider />
          <Grid item xs={6} sx={{}}>
            <div className="adminUpdates">
              <h1>Create an Update</h1>
              <Divider />
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <ReactQuill
                theme="snow"
                value={update}
                onChange={setUpdate}
                className="editor"
              />
              <button type="submit" onClick={handleUpdate}>
                Create Update
              </button>
            </div>
          </Grid>
          <Grid item xs={6} sx={{}}>
            <div className="adminUsers">
              <h1>Users</h1>
              {userData.map((user) => (
                <div className="userItem">
                  <p>
                    <strong>User: </strong> {user.username}
                  </p>
                  <p>
                    <strong>Site:</strong> {user.site}
                  </p>
                  <p>
                    <strong>isAdmin</strong>: {user.isAdmin ? "true" : "false"}
                  </p>
                </div>
              ))}

              <h1>Shiftlog count by Techs</h1>
              <p>Chris: {userCount.chris}</p>
              <p>Tyler: {userCount.tyler}</p>
              <p>Jose: {userCount.jose}</p>
              <p>James: {userCount.james}</p>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AdminDashboard;
