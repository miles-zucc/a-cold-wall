import { useContext } from "react";
import { GlobalStateContext } from "@/components/GlobalState";

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within GlobalState");
  }
  return context;
};

export default useGlobalState;
