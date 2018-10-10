import React from 'react';

const Card = (props) => {
    return (

        <div key={props.objectID} className="card">
            <a href={props.url}>{props.title}</a>
        </div>

    )
}

export default Card;