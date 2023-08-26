import React from 'react'

const TodoForm = () => {
  return (
    <div className='todo-form'>
      <h2>Create Task</h2>
      <form>
        <input type="text" placeholder='Insert the title' />
        <select>
          <option value="">Select category</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
        <button type='submit'>Create task</button>
      </form>
    </div>
  )
}

export default TodoForm