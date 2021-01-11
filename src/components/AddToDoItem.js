import "../App.css";
import React, { useState } from "react";

function AddToDoItem({ onAdd }) {
  const [userInput, setUserInput] = useState("");

  console.log("userInput", userInput);

  return (
    <div className="addToDoItem">
      <button onClick={() => onAdd(userInput)}>Add</button>
      <input
        onChange={(event) => setUserInput(event.target.value)}
        type="text"
        id="myText"
      />
    </div>
  );
}

export default AddToDoItem;
