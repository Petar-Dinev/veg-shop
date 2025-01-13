import { createContext, useContext, useState } from "react";
import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const navigate = useNavigate();

  const onRegister = async (values) => {
    try {
      const result = await authService.register(values);
      setAuthData(result);
      navigate("/");
    } catch (err) {
      return alert(err);
    }
  };

  const onLogin = async (values) => {
    try {
      const result = await authService.login(values);
      setAuthData(result);
      navigate("/");
    } catch (err) {
      return alert(err);
    }
  };

  const contextValues = { authData, onRegister, onLogin };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
