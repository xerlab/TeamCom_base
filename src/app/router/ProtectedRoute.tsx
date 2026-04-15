import { Navigate } from "react-router-dom";
import type { JSX } from "react/jsx-runtime";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;