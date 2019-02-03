import React, { Component } from 'react';
import Title from './components/title';
import Dashboard from './components/dashboard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      gamePlay: false
    }
  }

  startGame() {
    this.setState({gamePlay: true})
  }
  
  render() {
    if (this.state.gamePlay === false) {
      return (
        <div>
          <Title startGame={() => this.startGame()} />
        </div>
      )
    }
    else {
      return (
      <div>
        <Dashboard />
      </div>
      );
    }
  }
}

export default App;
