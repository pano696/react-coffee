import React from 'react';

import './beansLogo.sass'
import beansLogoWhite from './BeanslogoWhite.svg'
import beansLogoBlack from './BeanslogoBlack.svg'

function BeansLogo(props) {

  const logo = {
    white: beansLogoWhite,
    black: beansLogoBlack
  }

  const {color} = props;

  return (
    <img className="beanslogo" src={logo[color]} alt="Beans logo" />
  )
}

export default BeansLogo
