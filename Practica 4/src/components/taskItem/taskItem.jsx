import "bootstrap-icons/font/bootstrap-icons.css";
import "../taskItem/taskItem.css";
import { useState } from "react";
const TaskItem = ({ title, description, onDelete, id }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const handleComplete = () => {
    if (!isCompleted) {
      setIsCompleted(true);
    } else {
      alert("Ya has completado esta tarea");
    }
  };
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className={isCompleted ? "task-container-done" : "task-container"}>
      <div className="task-info-container">
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
      <div className="icons-container">
        <i onClick={handleComplete} className="bi bi-check2"></i>
        <i onClick={handleDelete} className="bi bi-trash"></i>
      </div>
    </div>
  );
};
export default TaskItem;
