import React from "react";
import { useState } from "react";
import "./App.css";
import Todos from "./Todo/Todos";

function App() {
  const [addTodo, setAddTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h5>Todo app</h5>
      <Todos
        addTodo={addTodo}
        setAddTodo={setAddTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
