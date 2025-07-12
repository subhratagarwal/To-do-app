import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todosSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (task.trim()) {
      setIsLoading(true);
      // Add a small delay for better UX
      setTimeout(() => {
        dispatch(addTodo(task.trim()));
        setTask("");
        setIsLoading(false);
      }, 200);
    }
  };

  return (
    <form onSubmit={submitHandler} className="add-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="✨ What needs to be done today?"
        aria-label="Task input"
        disabled={isLoading}
        maxLength={100}
      />
      <button 
        type="submit" 
        className={`add-btn ${isLoading ? 'loading' : ''}`}
        disabled={isLoading || !task.trim()}
      >
        {isLoading ? "Adding..." : "➕ Add Task"}
      </button>
    </form>
  );
}
