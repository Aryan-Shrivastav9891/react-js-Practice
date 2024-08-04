import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/index";
import TodoForm from "./components/TodoForm";
import TodoItems from "./components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { ...todo, id: Date.now() }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((i) => (i.id === id ? todo : i)));
  };

  const deleteTodo = (id) => {
    // setTodos((prev) => prev.filter((i) => i.id!== id));
    setTodos((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, toggleCompleted, updateTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4"><TodoForm/></div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo)=>(
              // <div key={todo.id} className={`flex items-center gap-2 w-full ${todo.completed? 'text-gray-400 bg-gray-200' : 'text-white bg-gray-800'} px-4 py-2 rounded-md`}>
              //   <input type="checkbox" checked={todo.completed} onChange={()=>toggleCompleted(todo.id)}/>
              //   <p>{todo.title}</p>
              //   <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
              // </div>
              <div key={todo.id} className="w-4">
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
