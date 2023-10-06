import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ShiftLogView from "../src/pages/ShiftLogView";
import CreateLogView from "./pages/CreateLogView";
import LogDetail from "./pages/LogDetail";
import DeleteLog from "./pages/deleteLog";
import UpdateLogView from "./pages/UpdateLogView";
import UpdatesView from "./pages/UpdatesView";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

function App() {
  return (
    <>
      <PrimeReactProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShiftLogView />} />
            <Route path="/create-log" element={<CreateLogView />} />
            <Route path="/:id" element={<LogDetail />} />
            <Route path="/delete/:id" element={<DeleteLog />} />
            <Route path="/update/:id" element={<UpdateLogView />} />
            <Route path="/updates" element={<UpdatesView />} />
          </Routes>
        </BrowserRouter>
      </PrimeReactProvider>
    </>
  );
}

export default App;
