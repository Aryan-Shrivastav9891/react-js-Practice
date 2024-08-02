import React, { useContext, createContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "hello",
      compleated : false,
    },
  ],
  addTodo:(todo)=>{},
  updateTodo:(id , todo)=>{},
  deleteTodo:(id)=>{},
  toggolComplete:(id)=>{},

});

export const useTodo = () => {
  return
  useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
