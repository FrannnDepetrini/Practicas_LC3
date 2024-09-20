import TaskItem from "../taskItem/taskItem";
import "../taskList/taskList.css";
const TaskList = ({ list, handlerDelete }) => {
  const handleDelete = (id) => {
    handlerDelete(id);
  };
  const listMapped = list.map((item) => (
    <TaskItem
      key={item.id}
      id={item.id}
      title={item.title}
      description={item.description}
      onDelete={handleDelete}
    />
  ));
  return <div className="tasklist-container">{listMapped}</div>;
};

export default TaskList;
