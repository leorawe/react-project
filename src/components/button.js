import React from 'react';

const  ButtonItem =({button}) => {
    //this will deal with a onClick on a button event
    //then we will need to save the Selected Button
    function handleClick(e){
        e.preventDefault();
        console.log('button got clicked!');
        //this.setState(something here);
    }
   return (
    <li><button onClick={(e) => handleClick(e)}> {button} </button></li>
    )
}

export default ButtonItem;