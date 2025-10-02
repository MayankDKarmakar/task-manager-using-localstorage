import React from "react";
import "../css/TodoList.css";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoList = ({ todos }) => {
  console.log(todos, "todoFOrm");
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li className="list-item" key={index}>
          <input type="checkbox" />
          <span className="todo-text">{todo.text}</span> <MdEdit /> <MdDelete />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
