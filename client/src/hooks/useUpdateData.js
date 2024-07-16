import { useEffect, useState } from "react";

export const useUpdateData = () => {
  const [updateData, setUpdateData] = useState([{}]);

  //get updates
  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/updates", {
      //https://shiftlog-backend.onrender.com
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setUpdateData(data));
  }, []);

  return updateData;
};
