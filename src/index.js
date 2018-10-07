import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './components/card-list';
import ButtonList from './components/button-list';
import SearchLine from './components/search-line';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const buttons = ["javascript","drupal","php"];
const cards = [1,2,3,4];

class App extends Component {
    constructor(props){
        super(props);

      this.state = {
          buttons: [],
          selectedButton: 'javascript'
      };
        
    }
render() {
      return (
        <div>
        <ButtonList buttons={buttons} />
        <br />
        {this.state.selectedButton}
        <SearchLine 
        selectedButton = {this.state.selectedButton}
        />
        <CardList 
        cards={cards}
        />
           
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
