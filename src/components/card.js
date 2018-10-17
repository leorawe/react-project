import React from 'react';

const Card = (props) => {
   // console.log(props);
    return (
        <div className="card" key={props.id}>
            <h2>{props.title}</h2>
           <p> <a href={props.href} target="_blank" rel="noopener noreferrer">{props.href}</a></p>
        </div>

    )
}

export default Card;