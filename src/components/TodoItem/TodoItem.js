import React, { PropTypes } from 'react';
import classNames from 'classnames';

import './TodoItem.css';

function TodoItem(props) {
  const {
    id,
    done,
    onRemoveTodo,
    onToggleTodo,
    text,
  } = props;

  return (
    <li
      className={classNames(
        'TodoItem',
        { 'TodoItem--done': done },
      )}
    >
      <label className="TodoItem__label">
        <input
          className="TodoItem__checkbox"
          type="checkbox"
          checked={done}
          onChange={() => onToggleTodo(id)}
        />
        <span>{text}</span>
      </label>
      <button
        className="TodoItem__delete-button"
        onClick={() => onRemoveTodo(id)}
      >
        Slett
      </button>
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
