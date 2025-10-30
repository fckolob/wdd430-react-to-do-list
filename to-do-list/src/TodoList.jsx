import TodoItem from "./TodoItem"

export default function TodoList( { todos, toogleTodo, deleteTodo}){
    return ( <ul className="list">
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return (
           <TodoItem {...todo} key={todo.id } toogleTodo={toogleTodo} deleteTodo={deleteTodo}/>
          )
        })}
         
      </ul>)
}   