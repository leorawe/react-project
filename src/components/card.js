import React from 'react';

const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <a href={props.href}>{props.title}</a>
        </div>

    )
}

export default Card;