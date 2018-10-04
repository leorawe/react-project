import React, { Component } from 'react';
import './App.css';
import CardList from './components/card-list'
import ButtonList from './components/button-list'

class App extends Component {
  render() {
    return (
      <div className="container">
      <ButtonList />
      <CardList />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
         
      </div>
    );
  }
}

export default App;
