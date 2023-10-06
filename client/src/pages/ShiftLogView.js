import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/ShiftLogView.css";
// import { useAuthContext } from "../hooks/useAuthContext";
import InfoBanner from "../components/InfoBanner";
import ShiftViewTable from "../components/ShiftViewTable";
import { useUpdateData } from "../hooks/useUpdateData";

const ShiftLogView = () => {
  const [shiftData, setShiftData] = useState([{}]);
  const updateData = useUpdateData();

  //production url https://shiftlog-backend.onrender.com/api/shiftlog
  //testing url /api/shiftlog
  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/shiftlog", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setShiftData(data));
  }, []);

  console.log(shiftData);

  return (
    <>
      <Navbar />
      <InfoBanner data={updateData} />
      <ShiftViewTable tableData={shiftData} />
    </>
  );
};

export default ShiftLogView;
