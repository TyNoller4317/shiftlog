import { useState, useEffect } from "react";

export const useShiftData = () => {
  const [shiftData, setShiftData] = useState([{}]);

  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/shiftlog", {
      //https://shiftlog-backend.onrender.com
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setShiftData(data));
  }, []);

  return shiftData;
};
