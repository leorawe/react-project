import React from 'react';
import ButtonItem from './button';
//import Button from './button'
//make a JSON list of data - keep in separate file or just here?
//possible searches: drupal, react, javascript, php, wordpress, python, java


    const ButtonList =(props)=>{
    const buttonItems = props.buttons.map((button) => {
        return (
        <ButtonItem
        onButtonSelect = {props.onButtonSelect}
        key = {button}
        button = {button} />
        )
    });

        return (
            <ul className="button-list">
            {/** how do you print a list - look in video list**/ }
               {buttonItems}
                
            </ul>
        );
    }
export default ButtonList;