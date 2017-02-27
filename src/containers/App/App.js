import React, { Component } from 'react';

import TodoList from '../../components/TodoList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1>Todos</h1>
        </div>
        <div className="App__content">
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
