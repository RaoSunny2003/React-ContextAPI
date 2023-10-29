import React, { useContext } from "react";
import { ContextCounter } from "../Context/Counter";

export default function Counter() {
  const counterContext = useContext(ContextCounter);
  return (
    <>
      <div>
        <button
          onClick={() => counterContext.setCount(counterContext.count + 1)}
        >
          Increment
        </button>
        <span> </span>
        <button
          onClick={() => counterContext.setCount(counterContext.count - 1)}
        >
          Decremenent
        </button>
      </div>
    </>
  );
}
