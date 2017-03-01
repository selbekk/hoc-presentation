import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import AddTodoPanel from '../../components/AddTodoPanel';
import TodoList from '../../components/TodoList';

import * as dispatchers from '../../dispatchers';

class TodoPage extends Component {
  render() {
    return (
      <div>
        <AddTodoPanel onAddTodo={this.props.addTodo} />
        <TodoList />
      </div>
    );
  }
}

TodoPage.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, dispatchers)(TodoPage);
