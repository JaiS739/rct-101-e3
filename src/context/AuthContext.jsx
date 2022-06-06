import React, { createContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  let login = () => {
    setIsAuth(true);

    navigate("/products");
  };

  let logout = () => {
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
