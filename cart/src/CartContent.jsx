import React, { useState, useEffect } from "react";

import { jwt, login } from "./cart";

export default function CartContent() {
  const [token, setToken] = useState("");

  useEffect(() => {
    return jwt.subscribe((value) => setToken(value ?? ""));
  }, []);

  return <div>JWT: {token}</div>;
}
