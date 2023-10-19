import React from "react";
import ShiftViewTable from "../components/ShiftViewTable";
import Navbar from "../components/Navbar";
import { useAllShifts } from "../hooks/useAllShifts";

function AllShifts() {
  const shiftData = useAllShifts();

  return (
    <>
      <Navbar />

      <ShiftViewTable tableData={shiftData} />
    </>
  );
}

export default AllShifts;
