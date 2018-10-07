import React from 'react';
import Card from './card';
//import SearchLine from './search-line';

const CardList = (props) =>{
    const cardItems = props.cards.map((card) => {
        return (
            <Card
            key={card}
            card={card} />
        )
    });
        return (
            <div className="card-list container">
                
                {/* line comment looks like this */}
            
                <div>{cardItems}</div>
            </div>
        );
    }

export default CardList;