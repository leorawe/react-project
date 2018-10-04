import React, { Component } from 'react';
const searchUrl = 'https://www.reddit.com/r/php/search.json?q=';
//the default should be in state - 'drupal'
//learn to set up a State ful component

class SearchLine extends Component {
    render(){
        return (
            <div>
                <p>search line - does it need to display?  or it just calculates - state goes in here</p>
            </div>
        );
    }
}
export default SearchLine;