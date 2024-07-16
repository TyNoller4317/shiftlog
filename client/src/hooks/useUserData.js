import { useState, useEffect } from "react";

export const useUserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://shiftlog-backend.onrender.com/api/users", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return users;
};
