import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import { AuthContextProvider } from "./context/authContext";
import { ShiftContextProvider } from "./context/shiftContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ShiftContextProvider>
        <App />
      </ShiftContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
