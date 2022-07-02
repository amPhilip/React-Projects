import React from "react";
import AddTodo from "./AddTodo";

const Todos = ({ addTodo, setAddTodo, todos, setTodos }) => {
  return (
    <div>
      <AddTodo
        addTodo={addTodo}
        setAddTodo={setAddTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
};

export default Todos;
