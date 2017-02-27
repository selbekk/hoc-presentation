import React, { Component, PropTypes } from 'react';

class AddTodoPanel extends Component {
  state = {
    text: '',
  }

  onChange = e => this.setState({ text: e.target.value })

  onClick = () => {
    this.props.onAddTodo(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    return (
      <div className="AddTodoPanel">
        <input
          className="AddTodoPanel__input"
          onChange={this.onChange}
          value={this.state.text}
        />
        <button
          className="AddTodoPanel__button"
          onClick={this.onClick}
        >
          +
        </button>
      </div>
    );
  }
}

AddTodoPanel.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};

export default AddTodoPanel;
