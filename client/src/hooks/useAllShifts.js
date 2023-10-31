import { useState, useEffect } from "react";

export const useAllShifts = () => {
  const [shiftData, setShiftData] = useState([{}]);

  useEffect(() => {
    fetch("/api/shiftlog/alllogs", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setShiftData(data));
  }, []);

  return shiftData;
};
