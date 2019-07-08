import React from 'react';
import Header from '../header';
import {Container, Row, Col} from 'reactstrap';
import BeansLogo from '../beansLogo';
import coffeeGirl from './coffee_girl.jpg'
import Line from '../line';
import Goods from '../goods';

const PleasurePage = () => {

  return (
  <>
    <Header
      pageType="banner"
      page="pleasure"
      title="For your pleasure"/>
    <section className="shop">
        <Container>
            <Row>
                <Col lg={{size: 4}} xs={{offset:2}}>
                    <img className="shop__girl" src={coffeeGirl} alt="girl" />
                </Col>
                <div className="col-lg-4">
                    <div className="title">About our beans</div>
                    <BeansLogo color="black" />
                    <div className="shop__text">
                      Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br /><br />
                      Afraid at highly months do things on at. Situation recommend objection do intention<br />
                      so questions. <br />
                      As greatly removed calling pleased improve an. Last ask him cold feel<br />
                      met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                      is song that held help face.
                    </div>
                </div>
            </Row>
            <Line />
            <Goods />
        </Container>
    </section>
  </>
  )
}

export default PleasurePage;
