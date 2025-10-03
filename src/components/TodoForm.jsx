//--------------------------All imports------------------------//
import React, { useEffect, useRef, useState } from "react";
import "../css/TodoForm.css";

//---------------------TodoForm Components Starts-----------------//

const TodoForm = ({ addTodo, isEditing, editedTodo, updateTodo }) => {
  //----------------------useState Hook--------------------------//
  const [todoText, setTodoText] = useState("");
  const inputRef = useRef(null); // useRef hook

  useEffect(() => {
    if (isEditing) {
      clearInputAndFocus();
      setTodoText(editedTodo);
    }
  }, [editedTodo, isEditing]);

  //----------------------Handler Fn-----------------------------//
  const handleAddTodo = (e) => {
    e.preventDefault();

    if (isEditing) {
      updateTodo({ text: todoText, completed: false });
      clearInputAndFocus();
      return;
    } else if (todoText) {
      addTodo({ text: todoText, completed: false });
    }

    clearInputAndFocus();
  };
  //--------------clearInput and Focus funtion-------------------//
  const clearInputAndFocus = () => {
    setTodoText("");
    inputRef.current.focus();
  };

  //----------------------Return JSX------------------------------//
  return (
    <form className="form" onSubmit={handleAddTodo}>
      <input
        ref={inputRef}
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        type="text"
        placeholder="Add Task..."
      />
      <button>{isEditing ? "EDIT" : "ADD"}</button>
    </form>
  );
};

//------------------------TodoForm Component Ends-----------------------//
export default TodoForm;
