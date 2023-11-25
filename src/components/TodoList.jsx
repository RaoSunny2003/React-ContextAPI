import React, { useContext, useState } from "react";
import { TodoContext } from "../Context/TodoContext";

export default function TodoList() {
  const { todo, setTodo } = useContext(TodoContext);
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const toggleInput = () => {
    setIsInputDisabled(!isInputDisabled);
  };

  function handleDeleteFunionality(index) {
    const cpyTodoForDelete = [...todo];
    delete cpyTodoForDelete[index];

    let filtered = cpyTodoForDelete.filter(isPositive);
    function isPositive(value) {
      return value !== undefined;
    }

    setTodo(filtered);
  }

  return (
    <>
      <div>
        <h1>Task</h1>
        <div className="TakListArea">
          {todo.map((task, index) => (
            <div key={index} className="TaskListItem">
              <div className="btn-group" role="group">
                <input
                  type="checkbox"
                  className="btn-check"
                  id={index}
                  autoComplete="off"
                />
                <label className="btn btn-outline-dark" htmlFor={index}>
                  Done
                </label>

                <input
                  value={task}
                  disabled={isInputDisabled}
                  onChange={function handleTaskChange(e) {
                    const cpyTodo = [...todo];
                    cpyTodo[index] = e.target.value;
                    setTodo(cpyTodo);
                  }}
                />
                <button className="btn btn-outline-dark" onClick={toggleInput}>
                  {isInputDisabled ? "Edit" : "Save"}
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleDeleteFunionality(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
