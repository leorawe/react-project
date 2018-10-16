import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './components/card-list';
import ButtonList from './components/button-list';
//SearchLine was good for vanilla JavaScript of reddit api
//import SearchLine from './components/search-line';
import * as serviceWorker from './serviceWorker';
import {
  DEFAULT_QUERY,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
} from './constants/';

const buttons = ["javascript","drupal","php", "reactjs", "laravel"];

class App extends Component {
    constructor(props){
        super(props);

      this.state = {
          buttons: [],
          selectedButton: DEFAULT_QUERY,
          result: null
      };
      this.setSearchTopStories = this.setSearchTopStories.bind(this);
      this.showResults = this.showResults.bind(this);
    }

    setSearchTopStories(result){
      //console.log(result);
      this.setState({result});
    }

    changeTerm = (newTerm) => {
      this.setState({
          selectedButton: newTerm
      } );
      this.showResults(newTerm);
      //do I need this?
     // e.preventDefault();
    }

    showResults (searchTerm){
      

     // const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${selectedButton}`;
      //console.log(url);
  
      fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
        .then(response => response.json())
        .then(result => this.setSearchTopStories(result))
        .catch(error => error);
    }
  
    componentDidMount() {
        const {selectedButton} = this.state;
        this.showResults(selectedButton);
    }

  /* componentDidUpdate(){
        this.showResults();
    }*/

render() {
  //console.log(this.state);

  const {selectedButton, result} = this.state;

  //if (!result) {return null;}
      return (
        <div>
        <ButtonList 
        buttons={buttons} 
       // changeTerm={this.changeTerm.bind(this)}  
        //onButtonSelect = {selectedButton => this.setState({selectedButton})}
        onButtonSelect = {this.changeTerm.bind(this)} 
        />
        <br />
        <div>{selectedButton}</div>
       <hr />
       {result &&
        <CardList 
        list={result.hits}
        />
       }
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
