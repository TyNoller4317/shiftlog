import { useState, useEffect } from "react";

export const useUserData = () => {
  const [users, setUsers] = useState([{}]);

  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/users", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return users;
};
