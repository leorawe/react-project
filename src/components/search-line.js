import React  from 'react';
const searchUrl = 'https://www.reddit.com/r/javascript/search.json?q=javascript';
//the default should be in state - 'javascript'

const SearchLine = (props) => {
// Create a request variable and assign a new XMLHttpRequest object to it.
let request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
console.log(`${searchUrl}${props.selectedButton}`);
//request.open('GET',`${searchUrl}${props.selectedButton}`, true);
request.open('GET',searchUrl, true);

request.onload = function () {
    // Begin accessing JSON data here
    console.log(request.status);
    let stuff = JSON.parse(this.response);
    let investigate = stuff.data.children;
   // console.log(investigate);
    Object.keys(investigate).map(i => console.log(investigate[i].data.selftext_html));
    Object.keys(investigate).map(i => console.log(investigate[i].data.title));
    Object.keys(investigate).map(i => console.log(investigate[i].data.url));
}
        return (
            <div>
                {searchUrl}{props.selectedButton}
            </div>
        );
    
}

export default SearchLine;