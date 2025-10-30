import { useEffect, useState } from "react";
import "./styles.css";
import "./NewTodoForm";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  

const [todos, setTodos] = useState(() => {
  const localValue = localStorage.getItem("ITEMS")
  if(localValue == null) return []
  
  return JSON.parse(localValue)});

useEffect(() => {
  localStorage.setItem("ITEMS", JSON.stringify(todos))
}, [todos])

  function addTodo(title){
    setTodos((currentTodos) => {
    const newTodos = [
      ...currentTodos,
      { id: crypto.randomUUID(), title: title, completed: false }
    ];
    
    console.log(newTodos);
    return newTodos;
  });
  }

  function toogleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }

  return (
    <>
     <NewTodoForm onSubmit={addTodo} />
      <h1>Todo List</h1>
      <TodoList todos={todos} toogleTodo={toogleTodo} deleteTodo={deleteTodo} />
    </>
  );
}