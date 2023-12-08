import React from "react";
import { Navigate } from "react-router-dom";
function PrivateRoutes({ children }) {
  let loggedIn = localStorage.getItem("isLoggedIn");
  if (loggedIn === "true") {
    return <> {children}</>;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoutes;
