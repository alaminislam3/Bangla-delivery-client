import React, { Children } from "react";
import UseAuth from "../Hooks/useAuth";
import useUserRole from "../Hooks/useUserRole";
import Loading from "../Pages/Shared/Loading/Loading";
import { Navigate } from "react-router";

const AdminRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const { role, roleLoading } = useUserRole();

  if (loading || roleLoading) {
    return <Loading> </Loading>;
  }
  if (!user || role !== "admin") {
    return (
      <Navigate
        state={{ from: location.pathname }}
        to={"/forbidden"}
      ></Navigate>
    );
  }
  return children;
};

export default AdminRoute;
