import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import { login, jwt } from "cart/cart";

const App = () => {
  const [currentJWT, setCurrentJWT] = React.useState(jwt.value);

  React.useEffect(() => {
    jwt.subscribe(setCurrentJWT);

    login("sally", "123");
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>JWT: {currentJWT}</div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
