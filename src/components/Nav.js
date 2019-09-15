import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav class="main-nav">
            <ul>
                <li><a href='#'>Cats</a></li>
                <li><a href='#'>Dogs</a></li>
                <li><a href='#'>Computers</a></li>
                {/* <li><NavLink to='/about'>About</NavLink></li> */}
            </ul>
        </nav>
    )
}

export default Nav;