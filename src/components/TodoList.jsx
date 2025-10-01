import React from "react";
import "../css/TodoList.css";
import { MdDelete, MdEdit } from "react-icons/md";

const TodoList = () => {
  return (
    <ul className="todo-list">
      <li className="list-item">
        <input type="checkbox" />
        <span className="todo-text">Todo 1</span> <MdEdit /> <MdDelete />
      </li>
      <li className="list-item">
        <input type="checkbox" />
        <span className="todo-text">Todo 2</span> <MdEdit /> <MdDelete />
      </li>
    </ul>
  );
};

export default TodoList;
