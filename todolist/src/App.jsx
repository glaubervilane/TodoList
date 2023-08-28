import React, { useState } from 'react';
import './styles/App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

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

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
      const newTodos = [
        ...todos, 
        {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
        },
      ];

    setTodos(newTodos)
  };  

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
      );
      setTodos(filteredTodos)
  };

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo
    );
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Task List</h1>
      <Search search={search} setSearch={setSearch} />
      <div className='todo-list'>
        {todos
        .filter((todo) => 
          todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
        .map((todo) => (
          <Todo 
            key={todo.id} 
            todo={todo} 
            removeTodo={removeTodo} 
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
