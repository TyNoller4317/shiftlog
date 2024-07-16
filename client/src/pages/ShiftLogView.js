import React from "react";
import "../styles/ShiftLogView.css";
import Navbar from "../components/Navbar";
import InfoBanner from "../components/InfoBanner";
import ShiftViewTable from "../components/ShiftViewTable";
import { useUpdateData } from "../hooks/useUpdateData";
import { useAllShifts } from "../hooks/useAllShifts";

const ShiftLogView = () => {
  const { shiftData, loading } = useAllShifts();
  const updateData = useUpdateData();

  return (
    <>
      <Navbar />
      <InfoBanner data={updateData} />
      <ShiftViewTable tableData={shiftData} />
    </>
  );
};

export default ShiftLogView;
