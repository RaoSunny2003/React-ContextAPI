import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export function useCart() {
  const cart = useContext(CartContext);
  return cart;
}

export const ContextProvider = (props) => {
  const [items, setItems] = useState([]);
  return (
    <CartContext.Provider value={{ items, setItems }}>
      {props.children}
    </CartContext.Provider>
  );
};
