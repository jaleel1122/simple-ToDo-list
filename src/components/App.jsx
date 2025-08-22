import React from "react";
import { useState } from "react";
import TodeItems from "./TodeItems";

function App() {
  const [inputItem, setInputItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function addItem() {
    setItemList((prevItem) => [...prevItem, inputItem]);
    setInputItem("");
  }

  function deleteItem(id) {
    setItemList((prevList) => {
      return prevList.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          onChange={(e) => setInputItem(e.target.value)}
          value={inputItem}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map((item, index) => (
            <TodeItems
              key={index}
              deleteItem={deleteItem}
              id={index}
              item={item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
