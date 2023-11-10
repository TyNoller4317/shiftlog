import { useState, useEffect } from "react";

export const useAllShifts = () => {
  const [shiftData, setShiftData] = useState([{}]);

  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/shiftlog/alllogs", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setShiftData(data));
  }, []);

  return shiftData;
};
