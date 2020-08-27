import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css'
let Navbar = (props) =>{
    return(
        <div className='wrapper'>
            <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
            <ul class="menu__box" id="head_adapt">
              <li><NavLink class="menu__item"to="/main">Main</NavLink></li>
              <li><NavLink class="menu__item"to="/friends"> Friend mode</NavLink></li>
              <li><NavLink class="menu__item"to="/love">Love mode</NavLink></li>
              <li><NavLink class="menu__item"to="/about">About  team </NavLink></li>
            </ul>
          </div>
            <ul className='dekstop'>
                <NavLink to='/main' className='navlink'> Main </NavLink>
                <NavLink to='/friends'  className='navlink'> Friend mode </NavLink>
                <NavLink to='/love'  className='navlink'> Love mode </NavLink>
                <NavLink to='/about'  className='navlink'> About  team </NavLink>
            </ul>
        </div>
    );
};

export default Navbar;