import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useSelector((state) => state.todo.todos);

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks yet!</h3>
        <p>Add your first task above to get started 🚀</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
