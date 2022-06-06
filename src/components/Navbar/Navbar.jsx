import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import style from "./Navbar.module.css";
// use react-router Link or NavLink
// const Link = <a />;

const Navbar = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  const { cartItem } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);

  let handleLoginStatus = () => {
    if (isAuth) {
      logout();
    }
  };

  return (
    <div className={style.flexy} data-cy="navbar">
      <Link to={isAuth ? "/products" : "/login"} data-cy="navbar-home-link">
        Logo
      </Link>
      <span data-cy="navbar-cart-items-count"> cart: {cartItem}</span>
      <button onClick={handleLoginStatus} data-cy="navbar-login-logout-button">
        {isAuth ? "logout" : "login"}
      </button>
    </div>
  );
};

export default Navbar;
