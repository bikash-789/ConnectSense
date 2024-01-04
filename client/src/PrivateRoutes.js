import { React } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./api/Auth_API";

function PrivateRoute({ children }) {
  const auth = isAuthenticated();
  if (!auth) return <Navigate to="/login" replace />;
  return children;
}

export default PrivateRoute;
