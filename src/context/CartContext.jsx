import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(0);

  let handleCartValue = (id) => {
    console.log(id);
    if (id) {
      setCartItem(cartItem + 1);
    }
  };

  let removeItem = () => {
    if (cartItem >= 1) {
      setCartItem(cartItem - 1);
    }
  };

  return (
    <CartContext.Provider value={{ removeItem, cartItem, handleCartValue }}>
      {children}
    </CartContext.Provider>
  );
};
