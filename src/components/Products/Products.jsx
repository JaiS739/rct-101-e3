import React, { useState } from "react";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let getData = async () => {
      let r = await fetch("http://localhost:8080/products");

      let d = await r.json();
      setProducts(d);
    };
    getData();
  }, []);

  return (
    <div>
      products
      <div>
        {products.map((e) => (
          <div key={e.id}></div>
        ))}
      </div>
      <Product products={products} />
    </div>
  );
};

export default Products;
