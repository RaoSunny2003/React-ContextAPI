import { createContext, useState } from "react";

export const ContextCounter = createContext(null);

export const ContextProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <ContextCounter.Provider value={{ count, setCount }}>
      {props.children}
    </ContextCounter.Provider>
  );
};
