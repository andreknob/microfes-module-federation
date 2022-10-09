import React, { useState, useEffect } from "react";

import { jwt, login } from "cart/cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    login("sally", "123");

    return jwt.subscribe((value) => setToken(value ?? ""));
  }, []);

  return <div>JWT: {token}</div>;
}
