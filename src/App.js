import React, { Component } from 'react';
import Dashboard from './components/dashboard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <header>
          State Capital Quiz
        </header>
        <Dashboard />
      </div>
    );
  }
}

export default App;
