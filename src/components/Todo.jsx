import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import TodoList from "./TodoList";

export default function Todo() {
  const todos = useSelector((state) => state.todo.todos);
  const completedCount = todos.filter(todo => todo.isDone).length;
  const totalCount = todos.length;

  return (
    <div className="todo-container">
      <h2>📝 My Todo List</h2>
      {totalCount > 0 && (
        <div style={{ 
          textAlign: 'center', 
          marginBottom: '1rem', 
          color: '#6c757d',
          fontSize: '1rem'
        }}>
          <strong>{completedCount}</strong> of <strong>{totalCount}</strong> tasks completed
          {completedCount === totalCount && totalCount > 0 && (
            <span style={{ color: '#28a745', marginLeft: '0.5rem' }}>
              🎉 All done!
            </span>
          )}
        </div>
      )}
      <AddForm />
      <TodoList />
    </div>
  );
}
