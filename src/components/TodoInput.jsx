import React, { useContext, useState } from "react";
import TodoList from "./TodoList";
import { TodoContext } from "../Context/TodoContext";

export default function TodoInput() {
  const [task, setTask] = useState("");
  const { todo, setTodo } = useContext(TodoContext);

  function handleClick() {
    if (task.length == 0) {
      return console.log("Task Area is empty write somthing");
    }
    setTodo([...todo, task]);
    console.log("todo", todo);
    setTask("");
  }
  return (
    <>
      <div className="btn-group">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleClick} className="btn btn-dark">
          Add Task
        </button>
      </div>
      <TodoList />
    </>
  );
}
