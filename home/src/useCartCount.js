import { useState, useEffect } from "react";
import { cart } from "cart/cart";

export function useCartCount() {
  const [count, setCount] = useState(cart.value?.cartItems.length);

  useEffect(() => {
    cart.subscribe(({ cartItems }) => setCount(cartItems.length));
  }, []);

  return count;
}
