import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Header from '../header';
import Text from '../text';
import BeansLogo from '../beansLogo';
import './mainPage.sass';



const MainPage = () => {

  return (
  <>
    <Header
      pageType="preview"
      page="main"
      title="Everything You Love About Coffee"
      beansLogo="white"
      subtitle={['We makes every day full of energy and taste', 'Want to try our beans?']}
      button="More"/>
    <section className="about">
        <Container>
            <Row>
                <Col lg={{size: 6, offset: 3}}>
                  <div class="title">About Us</div>
                  <BeansLogo color="black" />
                  <div class="about__text">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.Afraid at highly months do things on at. Situation recommend objection do intentionso questions. As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.<br /><br />Now residence dashwoods she excellent you. Shade being under his bed her, Muchread on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasanthorrible but confined day end marriage. Eagerness furniture set preserved farrecommend. Did even but nor are most gave hope. Secure active living depend sonrepair day ladies now.</div>
                </Col>
            </Row>
        </Container>
    </section>
  </>
  )
}

export default MainPage;
