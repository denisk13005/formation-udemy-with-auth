import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./context";

export function ProtectedRoutes(Component) {
  // eslint-disable-next-line react/display-name
  return () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { isAuthenticated, loading } = useAuth();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!isAuthenticated && !loading) router.push("/login");
    }, [isAuthenticated, loading, router]);
    return <Component {...arguments} />;
  };
}
