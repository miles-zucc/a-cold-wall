import { useEffect, useState } from "react";
import Router from "next/router";
import useAuth from "@/hooks/useAuth";

function useAuthPageRedirection(path = "/") {
  const { currentUser } = useAuth();
  const [cancelled, setCancelled] = useState(false);

  // Check on first mount if user is authenticated, if so redirect him to the homepage.
  // Note: as long as the authProvider waits for the auth check to finish before mounting the page
  // you can count on the currentUser prop being set correctly on the first page mount.
  useEffect(() => {
    if (currentUser) {
      if (typeof window !== "undefined") {
        Router.push(path);
      }
    } else {
      setCancelled(true);
    }
  }, []);

  // Use this boolean value to wait until the auth state has been decided before you display the page content.
  return cancelled;
}

export default useAuthPageRedirection;
