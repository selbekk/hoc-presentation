import React, { Component, PropTypes } from 'react';

import './AddTodoPanel.css';

class AddTodoPanel extends Component {
  state = {
    text: '',
  }

  onChange = e => this.setState({ text: e.target.value })

  onSubmit = e => {
    e.preventDefault();
    this.props.onAddTodo(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <form className="AddTodoPanel" onSubmit={this.onSubmit}>
        <input
          className="AddTodoPanel__input"
          onChange={this.onChange}
          placeholder="Hva vil du gjøre?"
          value={this.state.text}
        />
      </form>
    );
  }
}

AddTodoPanel.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoPanel;
