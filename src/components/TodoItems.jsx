import React from "react";
// props: item = {id, text, done}, deleteItem, toggleDone
function TodoItems({ item, id, deleteItem, toggleDone }) {
  return (
    <li>
      <button
        onClick={() => toggleDone(id)}
        aria-pressed={item.done}
        style={{
          textDecoration: item.done ? "line-through" : "none",
          cursor: "pointer",
          background: "transparent",
          border: "none",
          padding: 0,
          flex: 1,
          textAlign: "left",
        }}
      >
        {item.text}
      </button>

      <button
        onClick={() => deleteItem(id)}
        className="delete-btn"
        title="Delete item"
        aria-label={`Delete ${item.text}`}
      >
        🗑️
      </button>
    </li>
  );
}

export default TodoItems;
