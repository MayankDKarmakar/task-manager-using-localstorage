import React from "react";
import "../css/TodoForm.css";

const TodoForm = () => {
  return (
    <form className="form">
      <input type="text" placeholder="Add Task..." />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
