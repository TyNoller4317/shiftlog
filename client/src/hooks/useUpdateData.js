import { useEffect, useState } from "react";

export const useUpdateData = () => {
  const [updateData, setUpdateData] = useState([{}]);

  //get updates
  useEffect(() => {
    fetch("/api/updates", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setUpdateData(data));
  }, []);

  return updateData;
};
