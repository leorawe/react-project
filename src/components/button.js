import React from 'react';

const  ButtonItem =({button}) => {
    //this will deal with a onClick on a button event
    //then we will need to save the Selected Button
   return (
    <li> {button} </li>
    )
}

export default ButtonItem;