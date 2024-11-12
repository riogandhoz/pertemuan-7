import React, { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()])
      setNewTask('')
    }
  }

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index))
  }

  const editTask = (index) => {
    const updatedTask = prompt('Edit task:', tasks[index])
    if (updatedTask) {
      const newTasks = [...tasks]
      newTasks[index] = updatedTask
      setTasks(newTasks)
    }
  }

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      
      <div className="add-task">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="add item..."
          onKeyDown={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>ADD</button>
      </div>

      <div className="task-list">
        {tasks.map((task, index) => (
          <div key={index} className="task-item">
            <span>{task}</span>
            <div>
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button onClick={() => editTask(index)}>Edit</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App