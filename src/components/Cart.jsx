import React from "react";
import { useCart } from "../Context/Cart";

export default function Cart() {
  const cart = useCart();
  const amuont = cart.items.reduce((a, b) => a + b.price, 0);

  return (
    <>
      <div>
        <h2>Cart</h2>
        {cart &&
          cart.items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        <h5>Total - ${amuont}</h5>
      </div>
    </>
  );
}
