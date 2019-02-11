import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import Title from './components/title';
import Dashboard from './components/dashboard'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      lang: 'en',
      gamePlay: false
    }
    this.startGame = this.startGame.bind(this)
  }

  startGame() {
    this.setState({gamePlay: true})
  }
  
  render() {
    if (this.state.gamePlay === false) {
      return (
        <div>
          <Helmet>
            <html lang={this.state.lang} />
          </Helmet>
          <Title startGame={() => this.startGame()} />
        </div>
      )
    }
    else {
      return (
      <div>
        <Helmet>
          <html lang={this.state.lang} />
        </Helmet>
        <Dashboard />
      </div>
      );
    }
  }
}

export default App;
