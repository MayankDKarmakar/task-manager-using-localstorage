import React from "react";
import "../css/TodoList.css";
import { MdDelete } from "react-icons/md";

const TodoList = () => {
  return (
    <div className="todo-list">
      <li className="list-item">
        <span>Todo1</span> <MdDelete />
      </li>
    </div>
  );
};

export default TodoList;
