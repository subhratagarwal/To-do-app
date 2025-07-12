import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todosSlice";

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li className={`todo-item ${todo.isDone ? 'completed' : ''}`}>
      <span
        className={todo.isDone ? "completed" : ""}
        onClick={() => dispatch(markAsDone(todo.id))}
        title="Click to toggle completion"
      >
        {todo.isDone && "✅ "}{todo.task}
      </span>
      <div className="actions">
        <button 
          className={`status-btn ${todo.isDone ? 'undo' : 'done'}`}
          onClick={() => dispatch(markAsDone(todo.id))}
          title={todo.isDone ? "Mark as incomplete" : "Mark as complete"}
        >
          {todo.isDone ? "↩️ Undo" : "✅ Done"}
        </button>
        <button 
          className="delete-btn"
          onClick={() => dispatch(deleteTodo(todo.id))}
          title="Delete this task"
        >
          🗑️ Delete
        </button>
      </div>
    </li>
  );
}
