import React from 'react';
import TodoItem  from '../TodoItem';

const TodoList = (props) => {
  function deleteTodo(todo) {
    let filteredTodos = props.todos.filter(el => el != todo)
    props.setTodos(filteredTodos)
  }
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map((todo, idx) => {

          return <TodoItem key={idx} todo={todo} deleteFn={deleteTodo}/>

        })}
      </ul>
    </div>
  );
};

export default TodoList;
