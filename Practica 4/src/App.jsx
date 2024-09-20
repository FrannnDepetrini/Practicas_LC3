import { useState } from "react";
import "./App.css";

import TaskList from "./components/taskList/taskList";
import TaskNew from "./components/taskNew/taskNew";

function App() {
  const [tasks, setTasks] = useState([]);
  const [lastId, setLastId] = useState(0);

  const handlerAddTask = (newTask) => {
    setTasks([...tasks, newTask]), setLastId(lastId + 1);
  };
  const handlerDelete = (id) => {
    console.log(id), setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="app-container">
      <TaskNew lastId={lastId} handlerAddTask={handlerAddTask} />
      {tasks == "" ? (
        <h2>No hay tareas creadas aun</h2>
      ) : (
        <TaskList handlerDelete={handlerDelete} list={tasks} />
      )}
    </div>
  );
}

export default App;
