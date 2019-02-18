import React, { Component } from 'react';
import Helmet from 'react-helmet'
import MetaTags from 'react-meta-tags'
import {connect} from 'react-redux'
import Title from './components/title';
import Dashboard from './components/dashboard'
import './App.css';
import {startGame} from './actions'

class App extends Component {
  /*constructor(props) {
    super(props) 
    this.state = {
      lang: 'en',
      gamePlay: false
    }
    this.startGame = this.startGame.bind(this)
  }

  startGame() {
    this.setState({gamePlay: true})
  }*/
  
  render() {
    console.log(this.props.gamePlay)
    if (this.props.gamePlay === false) {
      return (
        <div>
          <MetaTags>
            <meta id="meta-description" name="description" content="A U.S. State Capital Quiz using React." />
            <meta id="meta-keywords" name="keywords" content="Quiz, React, State Capital, United States, USA" />
          </MetaTags>
          <Helmet>
            <html lang={this.props.lang} />
          </Helmet>
          {/*<Title startGame={() => this.startGame()} />*/}
          <Title startGame={() => this.props.dispatch(startGame())} />
        </div>
      )
    }
    else if (this.props.gamePlay === true) {
      return (
      <div>
        <MetaTags>
          <meta name="title" content="U.S. State Capital Quiz" />
          <meta name="description" content="A U.S. State Capital Quiz using React." />
          <meta name="keywords" content="Quiz, React, State Capital, United States, USA" />
        </MetaTags>
        <Helmet>
          <html lang={this.props.lang} />
        </Helmet>
        <Dashboard />
      </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  lang: state.lang,
  gamePlay: state.gamePlay
})

export default connect(mapStateToProps)(App);
