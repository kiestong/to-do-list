import "../App.css";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

function ToDoItem({ task, id, onDelete }) {
  return (
    <div className="ToDo">
      <Checkbox value="checkedA" inputProps={{ "aria-label": "Checkbox A" }} />
      <p>{task}</p>

      <IconButton
        color="secondary"
        aria-label="delete"
        onClick={() => onDelete(id)}
      >
        <DeleteIcon />
      </IconButton>

      {/* <button className="deleteButton" onClick={() => onDelete(id)}>
        Delete
      </button> */}
    </div>
  );
}

export default ToDoItem;
