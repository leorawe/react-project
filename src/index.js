import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './components/card-list';
import ButtonList from './components/button-list';
//SearchLine was good for vanilla JavaScript of reddit api
//import SearchLine from './components/search-line';
//import App from './App';
import * as serviceWorker from './serviceWorker';

const buttons = ["javascript","drupal","php"];
const DEFAULT_QUERY = 'reactjs';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

class App extends Component {
    constructor(props){
        super(props);

      this.state = {
          buttons: [],
          selectedButton: DEFAULT_QUERY,
          result: null
      };
      this.setSearchTopStories = this.setSearchTopStories.bind(this);
    }

    setSearchTopStories(result){
      this.setState({result});
    }
  
    componentDidMount() {
      const {searchTerm} = this.state;
  
      fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
        .then(response => response.json())
        .then(result => this.setSearchTopStories(result))
        .catch(error => error);
    }

render() {
  console.log(this.state);

  const {selectedButton, result} = this.state;

  if (!result) {return null;}
      return (
        <div>
        <ButtonList buttons={buttons} />
        <br />
        <div>{selectedButton}</div>
       <hr />
        <CardList 
        list={result.hits}
        />
           
        </div>
      );
    }
  }
  ReactDOM.render(<App />, document.getElementById('root'));

 // <SearchLine 
 //selectedButton = {selectedButton}
 ///> 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
