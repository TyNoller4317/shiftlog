import { useState, useEffect } from "react";

export const useAllShifts = () => {
  const [shiftData, setShiftData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/shiftlog/alllogs", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        setShiftData(data);
        setLoading(false);
      });
  }, []);

  return { shiftData, loading };
};
