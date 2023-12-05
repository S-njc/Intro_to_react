import React, { useState } from 'react'

const TodoForm = (props) => { 
  const [inputText, setInputText] = useState('');


  const updateInput = (e) => {
    setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // props.setTodos([{ text: inputText}])
    props.setTodos([...props.todos, { text: inputText, completed: false }])
    setInputText('')
  }

  return (
    <form aria-label="add task to lsit" onSubmit={handleSubmit}>
      <label htmlFor="task" style={{ marginRight: "10px " }}>
        Task
      </label>

      <input type="text" id="task"
        className="todo-input"
        value={inputText}
        onChange={updateInput}
      />

      <input type="submit" value="Add" />
    </form>
  )
}

export default TodoForm