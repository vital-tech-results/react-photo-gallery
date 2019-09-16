import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


export default class Nav extends Component {


    // handleClick = e => {
    //     e.preventDefault();
    //     this.props.onClick('rainbows')
    //     console.log('The link was clicked.');
    // }


    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink exact to='/rainbows' onClick={() => this.props.onClick('rainbows')}>Rainbows</NavLink></li>
                    <li><NavLink exact to='/mountains' onClick={() => this.props.onClick('mountains')}>Mountains</NavLink></li>
                    <li><NavLink exact to='/beaches' onClick={() => this.props.onClick('beaches')}>Beaches</NavLink></li>
                    {/* <li><NavLink to='/about'>About</NavLink></li> */}
                </ul>
            </nav >
        )
    }

}

