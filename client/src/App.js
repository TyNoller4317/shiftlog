import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ShiftLogView from "../src/pages/ShiftLogView";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateLogView from "./pages/CreateLogView";
import LogDetail from "./pages/LogDetail";
import DeleteLog from "./pages/deleteLog";
import UpdateLogView from "./pages/UpdateLogView";
import ProfileView from "./pages/ProfileView";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/shiftlog"
            element={user ? <ShiftLogView /> : <Navigate to="/" />}
          />
          <Route
            path="/create-log"
            element={user ? <CreateLogView /> : <Navigate to="/" />}
          />
          <Route
            path="/:id"
            element={user ? <LogDetail /> : <Navigate to="/" />}
          />
          <Route
            path="/delete/:id"
            element={user ? <DeleteLog /> : <Navigate to="/" />}
          />
          <Route
            path="/update/:id"
            element={user ? <UpdateLogView /> : <Navigate to="/" />}
          />
          <Route
            path="/profile"
            element={user ? <ProfileView /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
