import React from "react";
import { useCart } from "../Context/Cart";

export function Item(props) {
  const cart = useCart();
  function AddDataToCart() {
    cart.setItems([...cart.items, { name: props.name, price: props.price }]);
  }
  return (
    <>
      <div>
        <>Product name: {props.name}</>
        <p>Price: ${props.price}</p>
        <button onClick={AddDataToCart}>Add To Cart</button>
      </div>
    </>
  );
}
