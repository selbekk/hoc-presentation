import React, { PropTypes } from 'react';

function TodoItem(props) {
  const {
    id,
    done,
    onRemoveTodo,
    onToggleTodo,
    text,
  } = props;

  return (
    <li className="TodoItem">
      <input
        type="checkbox"
        checked={done}
        onChange={() => onToggleTodo(id)}
      />
      {text}
      <button onClick={() => onRemoveTodo(id)}>Slett</button>
    </li>
  );
}

TodoItem.propTypes = {
  done: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoItem;
