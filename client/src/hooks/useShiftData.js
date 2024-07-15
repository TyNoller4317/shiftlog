<<<<<<< HEAD
import { useState, useEffect } from "react";

export const useShiftData = () => {
  const [shiftData, setShiftData] = useState([{}]);
=======
import { useState, useEffect, useMemo } from "react";

export const useShiftData = () => {
  const [shiftData, setShiftData] = useState([{}]);
  let shift = [{}];
>>>>>>> 87ffa30 (Updated the design of the shiftlog as well as adding search functionality to the shiftlogs.)

  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/shiftlog", {
      headers: {},
    })
      .then((response) => response.json())
<<<<<<< HEAD
      .then((data) => setShiftData(data));
  }, []);

=======
      .then((data) => setShiftData(data))
      .catch((error) => console.log(error));
  }, []);
>>>>>>> 87ffa30 (Updated the design of the shiftlog as well as adding search functionality to the shiftlogs.)
  return shiftData;
};
