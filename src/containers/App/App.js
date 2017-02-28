import React, { Component } from 'react';

import TodoPage from '../TodoPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <h1 className="App__heading">Todos</h1>
        </div>
        <div className="App__content">
          <TodoPage />
        </div>
      </div>
    );
  }
}

export default App;
