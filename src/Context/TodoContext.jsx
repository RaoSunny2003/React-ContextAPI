import { createContext, useState } from "react";

export const TodoContext = createContext([]);

export const TodoContextProvider = (props) => {
  const [todo, setTodo] = useState(["Wake up at 6am"]);
  return (
    <TodoContext.Provider value={{ todo, setTodo }}>
      {props.children}
    </TodoContext.Provider>
  );
};
