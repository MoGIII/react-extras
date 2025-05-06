import React from 'react';
import './MenuItem.css';
import { Link } from 'react-router-dom';

function MenuItem (props){
    return (
        <li className='MenuItem'>
            <Link to={props.route}>
                {props.children}
            </Link>
        </li>
    );
}

export default MenuItem;
