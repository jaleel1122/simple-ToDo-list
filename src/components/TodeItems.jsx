import React, { useState } from "react";

function TodoItems({ item, id, deleteItem }) {
  const [isDone, setIsDone] = useState(false); // default should be false if not done yet

  function checked() {
    setIsDone((prevDone) => !prevDone);
  }

  return (
    <li>
      <span
        onClick={() => {
          checked();
        }}
        style={{
          textDecoration: isDone ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {item}
      </span>

      <button
        onClick={() => deleteItem(id)}
        style={{
          backgroundColor: "transparent",
          border: "none",
          color: "red",
          fontSize: "1.2rem",
          cursor: "pointer",
          marginLeft: "10px",
        }}
        title="Delete item"
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItems;
