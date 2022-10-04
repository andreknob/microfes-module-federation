import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "./Header";
import Footer from "./Footer";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <Header />
    <div className="my-10">Home Content</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
