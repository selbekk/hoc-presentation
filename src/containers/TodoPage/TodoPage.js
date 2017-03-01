import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import AddTodoPanel from '../../components/AddTodoPanel';
import TodoList from '../../components/TodoList';

import * as dispatchers from '../../dispatchers';

class TodoPage extends Component {
  componentDidMount() {
    const {
      getTodos,
      todos,
    } = this.props;

    if (!todos.length) {
      getTodos();
    }
  }

  render() {
    const {
      addTodo,
      removeTodo,
      todos,
      toggleTodo,
    } = this.props;

    return (
      <div>
        <AddTodoPanel onAddTodo={addTodo} />
        <TodoList
          removeTodo={removeTodo}
          todos={todos}
          toggleTodo={toggleTodo}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos,
});

TodoPage.propTypes = {
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, dispatchers)(TodoPage);
