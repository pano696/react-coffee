import React from 'react';
import {Link} from 'react-router-dom';

import './nav.sass'
import logoWhite from './logo_white.svg';
import logoBlack from './logo_black.svg';


const Nav = (props) => {

  const logo = {
    header: logoWhite,
    footer: logoBlack
  }

  const {position} = props;

  return (
    <ul className={position}>
      <li className={`${position}__item`}>
        <Link to="/" >
          <img src={logo[position]} alt="Coffee house" />
          Coffee house
        </Link>
      </li>
      <li className={`${position}__item`}>
        <Link to="/coffee" className="nav-item">
          Our coffee
        </Link>
      </li>
      <li className={`${position}__item`}>
        <Link to="/pleasure" className="nav-item">
          For your pleasure
        </Link>
      </li>
    </ul>
  )
}

export default Nav
