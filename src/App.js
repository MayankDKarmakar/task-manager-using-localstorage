//--------------------------All imports------------------------//
import "./App.css";
import { useReducer, useState, useEffect, act } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

//-----------------------Reducer Fn----------------------------//
function todoReducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [action.payload, ...todos];
    }
    case "DELETE_TODO": {
      return todos.filter((todo, index) => index !== action.payload);
    }
    case "UPDATE_TODO": {
      return todos.map((todo, index) =>
        index === action.payload.indexToBeEdited
          ? action.payload.updatedTodo
          : todo
      );
    }
    case "TOGGLE_COMPLETE": {
      return todos.map((todo, index) =>
        index === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }
    default:
      return todos;
  }
}

//-----------------------App Component Start-------------------------------//

function App() {
  //-------------------useState hook--------------------------------//
  const [editedTodo, setEditedTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [indexToBeEdited, setIndexToBeEdited] = useState(null);
  //-----------------useReducer hook--------------------------------//
  const [todos, dispatch] = useReducer(
    todoReducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );

  console.log(todos, "after toggle");
  //---------------use Effect to setItem to localStorage-----------//
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //-------------------Handler Functions-------------------------//
  function addTodo(todo) {
    dispatch({ type: "ADD_TODO", payload: todo });
  }

  function handleEditTodo(todo, index) {
    // console.log(todo, "TODO to be edited");
    setIndexToBeEdited(index);
    setIsEditing(true);
    setEditedTodo(todo.text);
  }
  function updateTodo(updatedTodo) {
    dispatch({
      type: "UPDATE_TODO",
      payload: { updatedTodo, indexToBeEdited },
    });
    setEditedTodo("");
    setIndexToBeEdited(null);
    setIsEditing(false);
  }

  function deleteTodo(index) {
    dispatch({ type: "DELETE_TODO", payload: index });
  }

  function toggleCompleted(index) {
    dispatch({ type: "TOGGLE_COMPLETE", payload: index });
  }

  //---------------Return JSX-----------------------------------//
  return (
    <div className="container">
      <h1 className="header">Task Manager</h1>
      <TodoForm
        addTodo={addTodo}
        isEditing={isEditing}
        editedTodo={editedTodo}
        updateTodo={updateTodo}
      />
      <TodoList
        todos={todos}
        handleEditTodo={handleEditTodo}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
}
//----------------------App Components Ends------------------------------//

export default App;
