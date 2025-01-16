import { createContext, useContext, useState } from "react";
import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({});
  const navigate = useNavigate();

  const onRegister = async ({ email, username, password, rePass }) => {
    try {
      if (email == '' || username == '' || password == '') {
        throw new Error('All fields are required!')
      }
      if (password != rePass) {
        throw new Error('Passwords don\'t match!')
      }
      const result = await authService.register({ email, username, password });
      setAuthData(result);
      navigate("/");
    } catch (err) {
      return alert(err.message);
    }
  };

  const onLogin = async ({ email, username, password }) => {
    try {
      if (email == '' || username == '' || password == '') {
        throw new Error('All fields are required!')
      }
      const result = await authService.login({ email, password });
      setAuthData(result);
      navigate("/");
    } catch (err) {
      return alert(err.message);
    }
  };

  const onLogout = async () => {
    try {
      await authService.logout();
      setAuthData({});
      navigate("/");
    } catch (err) {
      return alert(err);
    }
  };

  const contextValues = { authData, onRegister, onLogin, onLogout };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
