import React from "react";
import { Link } from "react-router-dom";

import Login from "cart/Login";
import MiniCart from "cart/MiniCart";

export default () => (
  <div className="p-5 bg-blue-500 text-white text-3xl">
    <div className="flex">
      <div className="flex flex-grow">
        <Link to="/">Fidget Spinner World</Link>
        <div className="mx-5">|</div>
        <Link id="cart" to="/cart">
          Cart
        </Link>
      </div>
      <div className="flex-end relative">
        <Login />
        <MiniCart />
      </div>
    </div>
  </div>
);
