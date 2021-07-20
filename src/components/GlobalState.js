import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "@/utils/state";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
