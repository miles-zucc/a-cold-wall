import Router from "next/router";
import useAuth from "@/hooks/useAuth";
import React from "react";
import { Loading } from "@/components/Auth/Loading";

export function withPrivateAccess(Component) {
  const WithPrivateAccess = props => {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) {
      if (typeof window !== "undefined") {
        Router.push("/auth");
      }
      return <Loading />;
    }

    return <Component {...props} />;
  };

  return WithPrivateAccess;
}
