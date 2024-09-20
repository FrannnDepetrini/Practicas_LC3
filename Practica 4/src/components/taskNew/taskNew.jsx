import { useState } from "react";
import { Button, Form } from "react-bootstrap";

import "../taskNew/taskNew.css";

const TaskNew = ({ handlerAddTask, lastId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionCounter, setDescriptionCounter] = useState(0);
  const [titleCounter, settitleCounter] = useState(0);
  const handleTitle = (e) => {
    setTitle(e.target.value);
    settitleCounter(e.target.value.length);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    setDescriptionCounter(e.target.value.length);
  };
  const addTask = (e) => {
    e.preventDefault(),
      handlerAddTask({
        id: lastId + 1,
        title,
        description,
      });
  };
  return (
    <div className="tasknew-container">
      <h2>Añade una nueva tarea!</h2>
      <Form onSubmit={addTask}>
        <div className="input-title-container">
          <Form.Control
            maxLength={10}
            onChange={handleTitle}
            value={title}
            placeholder="Titulo"
          ></Form.Control>
          <p>{titleCounter}</p>
        </div>
        <div className="description-title-container">
          <Form.Control
            maxLength={30}
            onChange={handleDescription}
            value={description}
            placeholder="Descripcion"
          ></Form.Control>
          <p> {descriptionCounter} </p>
        </div>
        <Button type="submit" style={{ marginTop: "10px" }}>
          Añadir
        </Button>
      </Form>
    </div>
  );
};

export default TaskNew;
