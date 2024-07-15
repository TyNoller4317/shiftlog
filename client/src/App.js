import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShiftLogView from "../src/pages/ShiftLogView";
import CreateLogView from "./pages/CreateLogView";
import LogDetail from "./pages/LogDetail";
import DeleteLog from "./pages/deleteLog";
import UpdateLogView from "./pages/UpdateLogView";
import UpdatesView from "./pages/UpdatesView";
import AllShifts from "./pages/AllShifts";
import DeleteUpdate from "./pages/deleteUpdate";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { useLogout } from "./hooks/auth/useLogout";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  // const { logout } = useLogout();

  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShiftLogView />} />
            <Route path="/alllogs" element={<AllShifts />} />
            <Route path="/create-log" element={<CreateLogView />} />
            <Route path="/:id" element={<LogDetail />} />
            <Route path="/delete/:id" element={<DeleteLog />} />
            <Route path="/update/:id" element={<UpdateLogView />} />
            <Route path="/updates" element={<UpdatesView />} />
            <Route path="/updates/delete/:id" element={<DeleteUpdate />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/adminDashboard" element={<AdminDashboard />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
}

export default App;
