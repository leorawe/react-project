import React from 'react';

const  ButtonItem =({button, onButtonSelect}) => {
    //this will deal with a onClick on a button event
    //then we will need to save the Selected Button
    /*function handleClick(e, selection){
        e.preventDefault();
        console.log('button got clicked! ', selection);
        //this.setState(something here);
    }*/
    
   return (

    <li><button onClick={( ) => onButtonSelect(button)}> {button} </button></li>
    )
}
//    <li><button onClick={(e) => handleClick(e, {button})}> {button} </button></li>
export default ButtonItem;