import {  useState } from "react";
import "./App.css";
import { TodoProvider } from "./assets/context";
import TodoForm from "./assets/components/TodoForm";
import TodoItem from "./assets/components/TodoItems";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((i) => (i.id === id ? todo : i)));
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((i) => i.id !== id));
  };

  const toggolComplete = (id) => {
    setTodos((prev) =>
      prev.map((i) => (i.id === id ? { ...i, compleated: !i.compleated } : i))
    );
  };

  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"));
  //   if (todos && todos.length > 0) {
  //     setTodos(todos);
  //   }
  // }, []);
  
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);
  
  

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggolComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm/>
            </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {console.log(todos , "hello")}
            {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
            {/* <TodoItem/> */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
