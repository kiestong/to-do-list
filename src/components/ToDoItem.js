import "../App.css";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";

function ToDoItem({ task, id, onDelete }) {
  return (
    <div className="ToDo">
      <Checkbox value="checkedA" inputProps={{ "aria-label": "Checkbox A" }} />
      <p>{task}</p>
      <button className="deleteButton" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default ToDoItem;
