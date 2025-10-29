import { useState } from "react";
import "./styles.css";

export default function App() {
  
const [newItem, setNewItem] = useState("");
const [todos, setTodos] = useState([]);

function handleSubmit(e){
  e.preventDefault();
  setTodos(...todos)
}

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value = {newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button id="btn" type="button">Add</button>
      </form>
      <h1>Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
         <li>
          <label>
            <input type="checkbox" />Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}