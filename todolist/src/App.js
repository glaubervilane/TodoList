import React, { useState } from 'react';
import './styles/App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

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
      text: "Study React",
      category: "Study",
      isCompleted: false,
    },
  ])

  return (
    <div className="app">
      <h1>Task List</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
