import React, { PropTypes } from 'react';
import TodoItem from '../TodoItem';

import './TodoList.css';

function TodoList(props) {
  const {
    removeTodo,
    todos,
    toggleTodo,
  } = props;

  return (
    <ul className="TodoList">
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          onToggleTodo={toggleTodo}
          onRemoveTodo={removeTodo}
          {...todo}
        />
      )}
    </ul>
  );
}

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
