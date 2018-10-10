import React, {Component} from 'react';
import Card from './card';
//import SearchLine from './search-line';

class CardList extends Component{
    render(){
    const {list} = this.props;
        return (
            <div className="card-list container">
                   
                {list.map(item =>
                    <Card  
                        key={item.objectID} 
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