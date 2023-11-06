import { useState, useEffect } from "react";

export const useShiftData = () => {
  const [shiftData, setShiftData] = useState([{}]);

  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/shiftlog/api/shiftlog", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setShiftData(data));
  }, []);

  return shiftData;
};
