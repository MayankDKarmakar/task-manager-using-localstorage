import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container">
      <h1 className="header">Task Manager</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
