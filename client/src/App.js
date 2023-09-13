import { React, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShiftLogView from "../src/pages/ShiftLogView";
import Navbar from "../src/components/Navbar";
import Homepage from "../src/pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateLogView from "./pages/CreateLogView";
import LogDetail from "./pages/LogDetail";
import DeleteLog from "./pages/deleteLog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShiftLogView />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-log" element={<CreateLogView />} />
          <Route path="/:id" element={<LogDetail />} />
          <Route path="/delete/:id" element={<DeleteLog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
