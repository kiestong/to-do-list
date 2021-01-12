import "../App.css";
import React, { useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

function AddToDoItem({ onAdd }) {
  const [userInput, setUserInput] = useState("");

  console.log("userInput", userInput);

  return (
    <div className="addToDoItem">
      <Button
        variant="contained"
        color="primary"
        size="small"
        startIcon={<SaveIcon />}
        onClick={() => onAdd(userInput)}
      >
        Add Task
      </Button>

      <TextField
        id="outlined-basic"
        label="Description"
        variant="outlined"
        onChange={(event) => setUserInput(event.target.value)}
        type="text"
        id="myText"
        style={{ marginLeft: 25, marginTop: 20, marginBottom: 20 }}
      />
    </div>
  );
}

export default AddToDoItem;
