import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useAuth } from "./context";

const AdminRoutes = (Component) => {
  // eslint-disable-next-line react/display-name
  return () => {
    const { isAuthenticated, user, loading } = useAuth();
    const router = useRouter();
    useEffect(() => {
      if (isAuthenticated && !loading && user.role !== "admin") {
        router.push("/");
      }
    }, [isAuthenticated, loading, user]);
    return <Component {...arguments} />;
  };
};

export default AdminRoutes;
