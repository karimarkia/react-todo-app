import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  useEffect(() => {
    editItem !== null ? setTitle(editItem.title) : setTitle('')
  }, [editItem])

  const onChangeHandler = e => {
    setTitle(e.target.value)
  }

  const onSubmitHnadler = e => {
    e.preventDefault()
    if (editItem === null) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const textChange = () => {
    return editItem ? 'Edit Task' : 'Add Task'
  }

  return (
    <form className="form" onSubmit={onSubmitHnadler}>
      <input
        onChange={onChangeHandler}
        value={title}
        type="text"
        className="task-input"
        placeholder="Add Task..."
        required
      />
      <div className="buttons">
        <button className="btn add-task-btn" type="submit">
          {textChange()}
        </button>
        <button className="btn clear-btn" onClick={clearList}>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
