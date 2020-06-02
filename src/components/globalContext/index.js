import React, { createContext, useReducer } from "react";

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  const initialState = {
    navOpen: false,
  };

  const reducer = (currentState, newState) => ({
    ...currentState,
    ...newState,
  });

  const [state, updateState] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, updateState }}>
      {children}
    </GlobalContext.Provider>
  );
};
