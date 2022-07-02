import React from "react";

const Todo = ({ todos, setTodos }) => {
  const delTodo = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };
  return (
    <div className="container">
      {todos.map((todo) => (
        <div className="container" key={todo.id}>
          <li>{todo.value}</li>
          <button className="del" onClick={() => delTodo(todo.id)}>
            Del
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
