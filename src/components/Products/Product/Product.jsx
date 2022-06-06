import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import style from "./Product.module.css";

const Product = ({ products }) => {
  // Note: this id should come from api
  // const product = { id: 1 };

  const [count, setCount] = useState(0);
  // const [cartItem, setCartItem] = useState(0);
  const { removeItem, handleCartValue } = useContext(CartContext);

  return (
    <div data-cy={`product-${products.id}`} className={style.flexy}>
      {products.map((e) => (
        <div key={e.id} className={style.border}>
          <h3 data-cy="product-name">{e.name}</h3>
          <h6 data-cy="product-description">{e.description}</h6>
          <button
            onClick={() => handleCartValue(e.id)}
            data-cy="product-add-item-to-cart-button"
          >
            add to cart
          </button>
          <div>
            <button
              onClick={() => setCount(count + 1)}
              data-cy="product-increment-cart-item-count-button"
            >
              +
            </button>
            <span data-cy="product-count">
              {
                // Count here from CartItems
                count
              }
            </span>
            <button
              onClick={() => setCount(count - 1)}
              data-cy="product-decrement-cart-item-count-button"
            >
              -
            </button>
            <button
              onClick={removeItem}
              data-cy="product-remove-cart-item-button"
            >
              Remove from the cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
