import React from 'react';

const Card = (props) => {
   // console.log(props);
    return (
        <div className="card">
            <h2>{props.title}</h2>
           <p> <a href={props.href}>{props.href}</a></p>
        </div>

    )
}

export default Card;