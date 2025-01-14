import { useEffect } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { Home } from "../home/Home";

export const Logout = () => {
  const { onLogout } = useAuthContext();

  useEffect(() => {
    onLogout();
  }, []);

  return <Navigate to="/" />;
};
