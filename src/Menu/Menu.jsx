import React, { Component } from 'react';
import './Menu.css';

function Menu (props){

        return (
            <ul className='Menu'>
                {props.children}
            </ul>
        );
}

export default Menu;
