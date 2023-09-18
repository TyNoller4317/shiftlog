import { createContext, useReducer } from "react";

export const ShiftContext = createContext();

export const shiftReducer = (state, action) => {
  switch (action.type) {
    case "SET_SHIFT":
      return { shift: action.payload };
    case "DELETE_SHIFT":
      return { shift: null };
    default:
      return state;
  }
};

export const ShiftContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shiftReducer, {
    shift: null,
  });

  return (
    <ShiftContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ShiftContext.Provider>
  );
};
