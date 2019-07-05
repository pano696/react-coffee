import React from 'react';
import {Container, Row} from 'reactstrap';
import Nav from '../nav';
import BeansLogo from '../beansLogo';

import './header.sass';
import mainBg from './main_bg.jpg';
import coffeeBg from './coffee_bg.jpg';
import pleasureBg from './pleasure_bg.jpg';



const Header = (props) => {

  const bg = {
    main: mainBg,
    coffee: coffeeBg,
    pleasure: pleasureBg
  }

  const {page, title, beansLogo, subtitle, button} = props;

  const Style = {
    "background" : `#000000 url(${bg[page]}) center center /cover no-repeat`
  };
  console.log(Style)
  return (
    <header className="header" style={Style}>
      <Container>
        <Row>
          <Nav color="white"/>
        </Row>
          <h1 className="header__title">{title}</h1>
          {beansLogo ? <BeansLogo color={beansLogo} /> : ''}
          {subtitle.map((item, index) => <div className="header__subtitle" key={index}>{item}</div>)}
          {button ? <div className="header__btn">{button}</div> : ''}
      </Container>
    </header>
  )
}

export default Header;
