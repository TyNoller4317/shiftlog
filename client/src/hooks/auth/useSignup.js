import { useState } from "react";
import { useAuthContext } from "../useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password, site) => {
    setIsLoading(true);
    setError(null);

    //prodution https://shiftlog-backend.onrender.com/api/users/register
    const response = await fetch(
<<<<<<< HEAD
      "https://shiftlog-backend.onrender.com/api/users/register",
=======
      "/api/users/register",
>>>>>>> 87ffa30 (Updated the design of the shiftlog as well as adding search functionality to the shiftlogs.)
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, site }),
      }
    );

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      //save the user and token to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
