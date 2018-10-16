import React, {Component} from 'react';
import Card from './card';
//import SearchLine from './search-line';

class CardList extends Component{
    render(){
    const {posts} = this.props;
        return (
            <div className="card-list container">
                   
                {posts.map(item =>
                    <Card  
                        key={item.id} 
                        href={item.url}
                        title = {item.title}
                    />
                
                )}
            </div>
        );
    }
}
export default CardList;

//<div key={item.objectID} className="card">
//<Card  />
//<span>
 //   <a href={item.url}>{item.title}</a>
//</span>
//</div>