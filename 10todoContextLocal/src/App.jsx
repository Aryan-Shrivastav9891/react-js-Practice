import { useState } from "react";
import "./App.css";
import {TodoProvider} from "./context"
import { useEffect } from "react";
function App() {
  const [todos , setTodos] = useState([])


  const addTodo=(todo)=>{
    setTodos((prev)=>[...prev ,{id: Date.now() , ...todo}])
  }

  const updateTodo = (id , todo) =>{
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id? todo : prevTodo) ))
  }

  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((i)=>i.id !== id))
  }

  const togolCompleate =(id)=>{
    setTodos((prev) => 
      // Use map to create a new array with updated todos
      prev.map((todo) => 
        // Check if the current todo's id matches the id to update
        todo.id === id 
          ? { ...todo, completed: !todo.completed } // If it matches, toggle the completed status
          : todo // If it doesn't match, return the todo unchanged
      )
    );
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todo"))

    if (todos && todos.length &&  todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  

  return (
    <TodoProvider value={{todos , addTodo , updateTodo , deleteTodo , togolCompleate}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
