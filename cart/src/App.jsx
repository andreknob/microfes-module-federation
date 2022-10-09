import React from "react";
import ReactDOM from "react-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "./CartContent";
import Login from "./Login";
import MiniCart from "./MiniCart";

const App = () => {
  return (
    <div className="mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <CartContent />
        <Login />
        <MiniCart />
      </div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
