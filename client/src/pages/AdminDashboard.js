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
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

function AdminDashboard() {
  const [title, setTitle] = useState("");
  const [update, setUpdate] = useState("");
  const { create_update } = useUpdate();
  const { user } = useAuthContext();
  const userData = useUserData();
  const { shiftData, loading } = useAllShifts();
  const updateData = useUpdateData();
  const [userCount, setUserCount] = useState({});

  useEffect(() => {
    if (shiftData.length > 0) {
      const count = {};
      shiftData.forEach((item) => {
        const logName = item["log_name"];
        if (!count[logName]) {
          count[logName] = 0; //Initialize the count for new users
        }
        count[logName] += 1; //Increment the count for each occurance
      });
      setUserCount(count);
    }
  }, [shiftData]);

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
            <div className="admin-title">
              <h1>Admin Dashboard</h1>
            </div>
          </Grid>
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
            <div className="todoList">
              <h1>Create a Todo List (in the works)</h1>
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
              <button type="submit">Create Todo </button>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className="metrics-container">
              <h1 className="metrics-title">Site Metrics</h1>
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
              <table className="userCountTable">
                <thead>
                  <tr>
                    <th>User</th>
                    <th># of Logs</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    Object.keys(userCount).map((user) => (
                      <tr key={user}>
                        <td>{user}</td>
                        <td>{userCount[user]}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </Grid>
          <Grid item xs={12} sx={{}}>
            <div className="adminUsers">
              <div className="adminUsersHeader">
                <h1>User Management</h1>
                {/* <button>Create a user</button> */}
              </div>
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
                  {/* <FaPencilAlt className="react-icon" />
                  <FaTrash
                    className="react-icon"
                    style={{ color: "#cc3030" }}
                  /> */}
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default AdminDashboard;
