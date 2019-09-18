import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    //render navigation links using onClick even handler and the props. pass props argument. the props are seen on App.js. in this case the prop is a function that takes an argument. pass 'rainbows' as argument to display images of rainbows
    render() {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink exact to='/rainbows' onClick={() => this.props.onClick('rainbows')}>Rainbows</NavLink></li>
                    <li><NavLink exact to='/mountains' onClick={() => this.props.onClick('himalayas')}>Mountains</NavLink></li>
                    <li><NavLink exact to='/beaches' onClick={() => this.props.onClick('beaches')}>Beaches</NavLink></li>
                </ul>
            </nav >
        )
    }

}

