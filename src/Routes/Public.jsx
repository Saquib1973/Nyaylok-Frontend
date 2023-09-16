import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Protecting public routes from logged in users
const Public = ({ children }) => {
  const { userToken } = useSelector((state) => state.authReducer);
  return !userToken ? children : <Navigate to={"/"} />;
};

export default Public;
