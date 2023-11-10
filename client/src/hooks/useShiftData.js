import { useState, useEffect } from "react";

export const useShiftData = () => {
  const [shiftData, setShiftData] = useState([{}]);

  useEffect(() => {
    fetch("/api/shiftlog", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setShiftData(data));
  }, []);

  return shiftData;
};
