export default function TodoItem({ completed, id, title, toogleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          onChange={(e) => toogleTodo(id, e.target.checked)}
          type="checkbox"
          checked={completed}
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
}