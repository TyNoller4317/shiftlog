import React from "react";
import "../styles/UpdatesView.css";
import Navbar from "../components/Navbar";
import Updates from "../components/Updates";
import { useUpdateData } from "../hooks/useUpdateData";

function UpdatesView() {
  const updateData = useUpdateData();

  return (
    <>
      <Navbar />
      <Updates data={updateData} />
    </>
  );
}

export default UpdatesView;
