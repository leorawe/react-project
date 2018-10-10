import React, {Component} from 'react';
import Card from './card';
//import SearchLine from './search-line';

class CardList extends Component{
    render(){
    const {list, pattern} = this.props;
        return (
            <div className="card-list container">
                   {pattern}
                {list.map(item =>
                <div key={item.objectID} className="card">
                    <span>
                        <a href={item.url}>{item.title}</a>
                    </span>
                </div>
                )}
            </div>
        );
    }
}
export default CardList;