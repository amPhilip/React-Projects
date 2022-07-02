import React from "react";
import Todo from "./Todo";

const AddTodo = ({ addTodo, setAddTodo, todos, setTodos }) => {
  const inputTodo = (e) => {
    setAddTodo(e.target.value);
  };

  const handleAddTodo = () => {
    const newtodos = {
      id: Math.floor(Math.random() * 1000),
      value: addTodo,
    };
    if (!addTodo) return alert("add a todo");

    setTodos((prevList) => [...prevList, newtodos]);
    setAddTodo("");
  };

  return (
    <div className="container">
      <div className="inputForm">
        <input
          type="text"
          placeholder="Add Todo"
          value={addTodo}
          onChange={inputTodo}
        />
        <button className="addBtn" onClick={handleAddTodo}>
          Add
        </button>
      </div>
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default AddTodo;
