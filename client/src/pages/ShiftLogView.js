import React from "react";
import "../styles/ShiftLogView.css";
import Navbar from "../components/Navbar";
import InfoBanner from "../components/InfoBanner";
import ShiftViewTable from "../components/ShiftViewTable";
import { useUpdateData } from "../hooks/useUpdateData";
import { useShiftData } from "../hooks/useShiftData";

const ShiftLogView = () => {
  const shiftData = useShiftData();
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
