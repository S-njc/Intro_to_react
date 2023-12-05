import React from 'react';

const TodoItem = (props) => {
  const { todo, deleteFn } = props;

  return (
    <li className="todo">
      <span className="todo-item">
        {todo.text}
      </span>
      <button aria-label="mark task as complete" className="complete-btn">&#x2713;</button>
      <button
        aria-label="delete task"
        className="rubbish-btn"
        onClick={() => deleteFn(todo)}
      >
        &#128465;
      </button>
    </li>
  );
};

export default TodoItem;
