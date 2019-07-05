import React from 'react';
import {Link} from 'react-router-dom';

import './nav.sass'
import logoWhite from './logo_white.svg';
import logoBlack from './logo_black.svg';


const Nav = (props) => {

  const logo = {
    white: logoWhite,
    black: logoBlack
  }
  const fontColor = {
    white: 'white',
    black: 'black'
  }

  const {color} = props;

  return (
    <ul className="nav">
      <li className="nav__item">
        <Link to="/"  style={{"color" : fontColor[color]}}>
          <img src={logo[color]} alt="Coffee house" />
          Coffee house
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/coffee" className="nav-item" style={{"color" : fontColor[color]}}>
          Our coffee
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/pleasure" className="nav-item" style={{"color" : fontColor[color]}}>
          For your pleasure
        </Link>
      </li>
    </ul>
  )
}

export default Nav
