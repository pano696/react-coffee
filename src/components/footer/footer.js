import React from 'react';
import {Container, Row} from 'reactstrap';
import Nav from '../nav';
import BeansLogo from '../beansLogo';

import './footer.sass';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Nav color="black" />
        </Row>
        <BeansLogo color="black" />
      </Container>
    </footer>
  )
}

export default Footer;
