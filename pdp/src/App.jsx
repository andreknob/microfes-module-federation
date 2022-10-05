import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const Header = React.lazy(() => import("home/Header"));
import Footer from "home/Footer";

const App = () => (
  <div className="mx-auto max-w-6xl">
    <React.Suspense fallback={<div>Loading...</div>}>
      <Header />
    </React.Suspense>
    <div className="my-10">PDP Content</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
