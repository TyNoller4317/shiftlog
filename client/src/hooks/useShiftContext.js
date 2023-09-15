import { ShiftContext } from "../context/shiftContext";
import { useContext } from "react";

export const useShiftContext = () => {
  const context = useContext(ShiftContext);

  if (!context) {
    throw new Error(
      "useShiftContext must be used inside an AuthContextProvider"
    );
  }

  return context;
};
