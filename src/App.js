import "./App.css";
import { useReducer, useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function todoReducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [action.payload, ...todos];
    }
    case "REMOVE_TODO":
    case "UPDATE_TODO":
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  function addTodo(todo) {
    dispatch({ type: "ADD_TODO", payload: todo });
  }

  return (
    <div className="container">
      <h1 className="header">Task Manager</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
