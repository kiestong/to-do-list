import logo from "./logo.svg";
import "./App.css";
import MyComponent from "./components/MyComponent";
import Checkbox from "@material-ui/core/Checkbox";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ToDoItem from "./components/ToDoItem";
import React, { useState } from "react";
import AddToDoItem from "./components/AddToDoItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [id, setId] = useState(1);

  function onDelete(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  function onAdd(description) {
    setId(id + 1);

    const newTaskObject = {
      id: id,
      description: description,
    };

    const newTasksArray = [...tasks, newTaskObject];

    setTasks(newTasksArray);
  }

  return (
    <Container style={{ flex: 1, width: "100%" }}>
      <AppBar position="static">
        <Typography variant="h6" color="inherit">
          To Do List
        </Typography>
      </AppBar>

      <AddToDoItem onAdd={onAdd} />

      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          id={task.id}
          task={task.description}
          onDelete={onDelete}
        ></ToDoItem>
      ))}
    </Container>
  );
}

export default App;
