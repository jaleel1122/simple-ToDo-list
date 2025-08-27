import React, { useState, useEffect } from "react";
import TodoItems from "./TodoItems";

const STORAGE_KEY = "react-todo-items-v1";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [itemList, setItemList] = useState([]);

  // load from localStorage once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItemList(JSON.parse(raw));
    } catch (e) {
      console.error("Failed to parse saved items", e);
    }
  }, []);

  // save to localStorage when list changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(itemList));
  }, [itemList]);

  function addItem(e) {
    if (e && e.preventDefault) e.preventDefault();
    const text = inputItem.trim();
    if (!text) return; // do not add empty
    const newItem = {
      id:
        crypto && crypto.randomUUID
          ? crypto.randomUUID()
          : Date.now().toString(),
      text,
      done: false,
      createdAt: Date.now(),
    };
    setItemList((prev) => [...prev, newItem]);
    setInputItem("");
  }

  function deleteItem(id) {
    setItemList((prevList) => prevList.filter((item) => item.id !== id));
  }

  function toggleDone(id) {
    setItemList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  return (
    <main className="container" aria-labelledby="todo-heading">
      <header className="heading">
        <h1 id="todo-heading">To-Do List</h1>
      </header>

      <form className="form" onSubmit={addItem}>
        <input
          type="text"
          onChange={(e) => setInputItem(e.target.value)}
          value={inputItem}
          placeholder="Add a new task..."
          aria-label="New task"
        />
        <button type="submit" aria-label="Add task">
          <span>Add</span>
        </button>
      </form>

      <section>
        <ul>
          {itemList.map((item) => (
            <TodoItems
              key={item.id}
              id={item.id}
              item={item}
              deleteItem={deleteItem}
              toggleDone={toggleDone}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
