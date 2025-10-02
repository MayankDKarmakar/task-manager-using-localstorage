import React from "react";
import "../css/TodoForm.css";
import { useRef } from "react";

const TodoForm = ({ addTodo, updateTodo }) => {
  const inputRef = useRef(null);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (inputRef.current.value) {
      addTodo({ text: inputRef.current.value, completed: false });
    }

    clearInputAndFocus();
  };

  const clearInputAndFocus = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <form className="form" onSubmit={handleAddTodo}>
      <input ref={inputRef} type="text" placeholder="Add Task..." />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
