import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../TodoItem';
import AddTodoPanel from '../AddTodoPanel';

import * as dispatchers from '../../dispatchers';

import './TodoList.css';

function TodoList(props) {
  const {
    addTodo,
    removeTodo,
    todos,
    toggleTodo,
  } = props;

  return (
    <div>
      <AddTodoPanel onAddTodo={addTodo} />
      {todos.length === 0 &&
        <h2>Finn på noe å gjøre!</h2>
      }
      {todos.length > 0 &&
        <ul className="TodoList">
          {props.todos.map(todo =>
            <TodoItem
              key={todo.id}
              onToggleTodo={toggleTodo}
              onRemoveTodo={removeTodo}
              {...todo}
            />
          )}
        </ul>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
});

TodoList.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, dispatchers)(TodoList);
