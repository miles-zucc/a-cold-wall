import React, { useEffect, useState } from "react";
import { Loading } from "@/components/Auth/Loading";
import useGlobalState from "@/hooks/useGlobalState";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const { state, dispatch } = useGlobalState();
  const { authenticated } = state;
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    console.log(authenticated);
    console.log(isAuthenticated);
    if (authenticated) {
      setIsAuthenticated(true);
      setPending(false);
    }
  }, [authenticated]);

  // if (pending) {
  //   return <Loading />;
  // }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
