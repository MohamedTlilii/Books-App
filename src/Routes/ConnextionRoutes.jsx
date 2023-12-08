import React from "react";
import { Navigate } from "react-router-dom";
function ConnexionRoutes({ children }) {
  let session = localStorage.getItem("isLoggedIn");
  if (!session) {
    return <>{children}</>
  } else {
    return <Navigate to="/not-found"/>
  }
}

export default ConnexionRoutes;
