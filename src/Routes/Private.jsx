import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Protecting Private Routes from public users
const Private = ({ children }) => {
  const { userToken } = useSelector((state) => state.authReducer);
  return userToken ? children : <Navigate to={"/"} />;
};

export default Private;
