import React, { useState } from 'react';
import './styles/App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      ids: 1,
      text: "Create a new functionality on the system",
      category: "Work",
      isCompleted: false,
    },
    {
      ids: 2,
      text: "Go to the gymn",
      category: "Personal",
      isCompleted: false,
    },
    {
      ids: 3,
      text: "TStudy React",
      category: "Study",
      isCompleted: false,
    },
  ])

  return (
    <div className="app">
      <h1>Task List</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <div className='todo'>
            <div className='content'>
              <p>{todo.text}</p>
              <p className='category'>({todo.category})</p>
            </div>
            <div>
              <button>Complete</button>
              <button>X</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
