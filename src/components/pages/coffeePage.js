import React, {useState} from 'react';
import Header from '../header';
import {Container, Row, Col} from 'reactstrap';
import BeansLogo from '../beansLogo';
import coffeeGirl from './coffee_girl.jpg'
import Line from '../line';
import Shop from '../shop';
import './coffeePage.sass';

const CofeePage = () => {

  const [filterCountry, setFilterCountry] = useState('');
  const [filterWord, setFilterWord] = useState('');

  return (
  <>
    <Header
      pageType="banner"
      page="coffee"
      title="Our Coffee"/>
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
                        Afraid at highly months do things on at. Situation recommend objection do intention so questions. <br />
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went<br />
                        is song that held help face.
                    </div>
                </div>
            </Row>
            <Line />
            <Row >
                <Col lg={{size: 4}} xs={{offset:2}}>
                    <form action="#" className="shop__search">
                        <label className="shop__search-label" htmlFor="filter">Looking for</label>
                        <input
                          id="filter"
                          type="text"
                          placeholder="start typing here..."
                          className="shop__search-input"
                          onChange={event => setFilterWord(event.target.value)}/>
                    </form>
                </Col>
                <Col lg={{size: 4}}>
                    <div className="shop__filter">
                        <div className="shop__filter-label">
                            Or filter
                        </div>
                        <div className="shop__filter-group">
                            <button className="shop__filter-btn" onClick={() => setFilterCountry(undefined)}>X</button>
                            <button className="shop__filter-btn" onClick={() => setFilterCountry('Brazil')}>Brazil</button>
                            <button className="shop__filter-btn" onClick={() => setFilterCountry('Kenya')}>Kenya</button>
                            <button className="shop__filter-btn" onClick={() => setFilterCountry('Columbia')}>Columbia</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Shop
              filterCountry={filterCountry}
              filterWord={filterWord}/>
        </Container>
    </section>
  </>
  )
}

export default CofeePage;
