import React, { useState, useRef } from "react";
import TodoList from './TodoList.js';

function App() {
  const [todos, setTodos] = useState([])

  function handleAddTodo(e) {
  
  }

  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Completed Todo</button>
      <div>0 left Todo</div>
    </>
  )
}

export default App;