import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const PrivateAdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo?.role == "Admin" ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default PrivateAdminRoute;
