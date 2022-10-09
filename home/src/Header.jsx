import React from "react";
import Login from "cart/Login";
import MiniCart from "cart/MiniCart";

export default () => (
  <div className="p-5 bg-blue-500 text-white text-3xl">
    <div className="flex">
      <div className="flex-grow">Fidget Spinner World</div>
      <div className="flex-end relative">
        <Login />
        <MiniCart />
      </div>
    </div>
  </div>
);
