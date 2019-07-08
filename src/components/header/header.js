import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Nav from '../nav';
import BeansLogo from '../beansLogo';
import {withRouter} from 'react-router-dom';

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

  const {pageType, page, title, beansLogo, subtitle, button, buttonLink, history} = props;

  const Style = {
    "background" : `#000000 url(${bg[page]}) center center /cover no-repeat`
  };

  return (
    <div className={pageType} style={Style}>
      <Container>
      <Row>
          <Col lg="6">
            <header>
              <Nav position="header" />
            </header>
          </Col>
        </Row>
        <Row>
          <Col lg={{size: 10, offset: 1}}>
            <h1 className={`title-big`}>{title}</h1>
            {beansLogo ? <BeansLogo color={beansLogo} /> : ''}
            {subtitle ? subtitle.map((item, index) => <div className={`${pageType}__subtitle`} key={index}>{item}</div>) : ''}
            {button ? <div className={`${pageType}__btn`} onClick={() => history.push(buttonLink)}>{button}</div> : ''}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default withRouter(Header);
