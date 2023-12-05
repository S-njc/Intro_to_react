import React, { useState } from 'react'
import { TodoForm, TodoList } from '../components'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([{ text: 'Teach React' }, { text: 'Complain About something random' }, { text: 'Take a Break' }]);

  return (
    <>
      <header>Reddy's List</header>
      <TodoForm todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </>
  )
}

export default App