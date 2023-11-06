import { useState } from "react";

export const useUpdate = () => {
  const create_update = async (title, update) => {
    const response = await fetch(
      "https://shiftlog-backend.onrender.com/api/shiftlog/api/updates",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          update,
        }),
      }
    );

    const json = await response.json();

    if (response.ok) {
      localStorage.setItem("update", JSON.stringify(json));
    }

    window.location.reload(false);
  };

  return { create_update };
};
