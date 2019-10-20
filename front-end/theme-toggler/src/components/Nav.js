import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import { ThemeContext } from '../ThemeContext';
import './Nav.css';

export default class Nav extends Component {
    static contextType = ThemeContext;

  render() {
    const {isLightTheme, toggleTheme} = this.context;
    const theme = isLightTheme ? '' : 'dark';

    return (
        <nav className={theme}>
            <div className='nav-links'>
                <li>
                    <NavLink exact activeClassName='active' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink activeClassName='active' to='/about'>About</NavLink>
                </li>
            </div>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </nav>
    )
  }
}
