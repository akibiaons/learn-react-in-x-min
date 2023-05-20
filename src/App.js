import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  return (
    <>
      <ToDoList />
      <input type="text" />
      <button>Add To Do</button>
      <button>Clear To Do</button>
      <div>0 left To Do</div>
    </>
  );
}

export default App;
