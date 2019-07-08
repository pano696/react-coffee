import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Nav from '../nav';
import BeansLogo from '../beansLogo';

import './footer.sass';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <Nav position="footer" />
          </Col>
        </Row>
        <BeansLogo color="black" />
      </Container>
    </footer>
  )
}

export default Footer;
