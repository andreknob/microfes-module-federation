import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "home/Header";
import Footer from "home/Footer";
import CartContent from "cart/CartContent";
import HomeContent from "home/HomeContent";
import PDPContent from "pdp/PDPContent";

const MainLayout = () => (
  <Router>
    <div className="mx-auto max-w-6xl">
      <Header />
      <div className="my-10">
        <Routes>
          <Route exact path="/" element={<HomeContent />} />
          <Route path="/product/:id" element={<PDPContent />} />
          <Route path="/cart" element={<CartContent />} />
        </Routes>
      </div>
      <Footer />
    </div>
  </Router>
);

export default MainLayout;
