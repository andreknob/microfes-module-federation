import React, { useState, useEffect } from "react";
//import { Link } from "react-router-dom";
import { getProducts, currency } from "./products";
import { useLoggedIn, addToCart } from "cart/cart";

export default function HomeContent() {
  const isLoggedIn = useLoggedIn();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          {/*<Link to={`/product/${product.id}`}>
            </Link>*/}
          <img src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              {/*<Link to={`/product/${product.id}`}>
              </Link>*/}
              <a>{product.name}</a>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
          {isLoggedIn && (
            <div className="text-right mt-2">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded"
                onClick={() => addToCart(product.id)}
                id={`addtocart_${product.id}`}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
