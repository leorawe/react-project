import React, { Component } from 'react';
import axios from 'axios';
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
} from './constants/';

const buttons = ["javascript","drupal","php", "reactjs", "laravel", "books"];

class App extends Component {
    constructor(props){
        super(props);

      this.state = {
          buttons: [],
          selectedButton: DEFAULT_QUERY,
          posts: [],
          loading: true,
          error: null
      };
     // this.setSearchTopStories = this.setSearchTopStories.bind(this);
      this.showResults = this.showResults.bind(this);
    }

   /* setSearchTopStories(result){
      //console.log(result);
      this.setState({result});
    }*/

    changeTerm = (newTerm) => {
      this.setState({
          selectedButton: newTerm
      } );
      this.showResults(newTerm);
      //do I need this?
     // e.preventDefault();
    }

    showResults (searchTerm){

     //const url = `${PATH_BASE}${DEFAULT_SUBREDDIT}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}${END_VALUES}`;
     const url = `${PATH_BASE}${searchTerm}.json`;
     console.log(url);
  
     // axios(`${PATH_BASE}${DEFAULT_SUBREDDIT}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}${END_VALUES}`)
        axios.get(`${PATH_BASE}${searchTerm}.json`)
        .then(res => {
          // Transform the raw data by extracting the nested posts
          const posts = res.data.data.children.map(obj => obj.data);
  
          // Update state to trigger a re-render.
          // Clear any errors, and turn off the loading indiciator.
          this.setState({
            posts,
            loading: false,
            error: null
          });
        })
        .catch(err => {
          // Something went wrong. Save the error in state and re-render.
          this.setState({
            loading: false,
            error: err
          });
        });
    }
  
    componentDidMount() {
        const {selectedButton} = this.state;
        this.showResults(selectedButton);
    }

render() {
  const {selectedButton, posts} = this.state;
  //console.log({posts});
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
        <CardList 
        posts={posts}
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
