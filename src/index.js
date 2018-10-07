import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './components/card-list';
import ButtonList from './components/button-list';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const buttons = ["javascript","drupal","php"];

class App extends Component {
    constructor(props){
        super(props);

      this.state = {
          buttons: [],
          selectedButton: null
      
      }
    //this.buttonStart('javascript');
      
    }

    render() {
      return (
        <div className="container">
        <ButtonList buttons={buttons} />
        <CardList />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
           
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
