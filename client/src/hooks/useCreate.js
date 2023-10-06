import { useState } from "react";
import { useShiftContext } from "./useShiftContext";

export const useCreate = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useShiftContext();

  const create_shift = async (
    ticket,
    walkthrough,
    critical_updates,
    ticket_updates,
    log_name
  ) => {
    setIsLoading(false);
    setError(null);

    //production https://shiftlog-backend.onrender.com/api/shiftlog
    const response = await fetch(process.env.CREATE_PROD_ROUTE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ticket,
        walkthrough,
        critical_updates,
        ticket_updates,
        log_name,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      //save the user and token to local storage
      localStorage.setItem("shiftlog", JSON.stringify(json));

      //update auth context
      dispatch({ type: "SET_SHIFT", payload: json });
      setIsLoading(false);
    }
  };

  return { create_shift, isLoading, error };
};

//production https://shiftlog-backend.onrender.com/api/shiftlog
//test /api/shiftlog
// fetch("/api/shiftlog", {
//   method: "POST",
//   body: JSON.stringify({
//     ticket,
//     walkthrough,
//     critical_updates,
//     ticket_updates,
//     log_name,
//     date,
//   }),
//   headers: {
//     "Content-Type": "application/json",
//     authorization: `Bearer ${user.accessToken}`,
//   },
// })
//   .then((res) => {
//     if (res.status === 200) {
//       console.log("Status 200 Ok");
//       navigate("/shiftlog");
//     } else {
//       throw new Error("Error creating log");
//     }
//   })
//   .catch((err) => {
//     console.error(err);
//   });
