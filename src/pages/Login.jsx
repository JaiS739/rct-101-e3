import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import style from "./Login.module.css";
const Login = () => {
  const { isAuth, login, logout } = useContext(AuthContext);

  let handleLogin = () => {
    login();
  };

  return (
    <div className={style.flexy}>
      <input data-cy="login-email" placeholder="email" />
      <input data-cy="login-password" placeholder="password" />
      <button onClick={handleLogin} data-cy="login-submit">
        login
      </button>
    </div>
  );
};

export default Login;
