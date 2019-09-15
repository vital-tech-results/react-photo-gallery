import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink exact to='/rainbows'>Rainbows</NavLink></li>
                <li><NavLink exact to='/mountains'>Mountains</NavLink></li>
                <li><NavLink exact to='/beaches'>Beaches</NavLink></li>
                {/* <li><NavLink to='/about'>About</NavLink></li> */}
            </ul>
        </nav>
    )
}

export default Nav;