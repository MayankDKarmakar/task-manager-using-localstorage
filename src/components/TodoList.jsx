import React from "react";
import "../css/TodoList.css";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoList = ({ todos, handleEditTodo, deleteTodo, toggleCompleted }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li className="list-item" key={index}>
          <input
            type="checkbox"
            onChange={() => toggleCompleted(index)}
            checked={todo.completed}
          />
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.text}
          </span>{" "}
          <MdEdit
            className="edit-todo"
            onClick={() => handleEditTodo(todo, index)}
          />{" "}
          <MdDelete className="delete-todo" onClick={() => deleteTodo(index)} />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
