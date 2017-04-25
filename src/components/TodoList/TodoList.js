import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../TodoItem';

import * as dispatchers from '../../dispatchers';
// import withLoadedProperties from '../../hocs/withLoadedProperties';
// import withSpinner from '../../hocs/withSpinner';

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

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, dispatchers)(
    TodoList
)
