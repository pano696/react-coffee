import React, {useState} from 'react';
import Header from '../header';
import {Container, Row, Col} from 'reactstrap';
import DbConsumer from '../dbConsumer';
import BeansLogo from '../beansLogo';
import coffeeGirl from './coffee_girl.jpg'
import Line from '../line';
import Goods from '../goods';
import Spiner from '../spinner';
import Error from '../error';

const PleasurePage = (props) => {

  const [good, setGood] = useState({name: "About our beans", img: coffeeGirl, price: undefined})
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);

  const goodsSelected = async (name) => {
    setLoad(true);
    const res = await props.dbService.getGood(name)
      .then(response => response)
      .catch(() => setError(true));
      setGood({
        name: res.name,
        img: res.url,
        price: res.price
      })
      setLoad(false);
  }

  const itemInfo = () => {
    if (load) return <Spiner />
    if (error) return <Error />

    return(
      <Row>
        <Col lg={{size: 4}} xs={{offset:2}}>
            <img className="shop__girl" src={good.img} alt="girl" />
        </Col>
        <div className="col-lg-4">
            <div className="title">{good.name}</div>
            <BeansLogo color="black" />
            <div className="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br /><br />
              Afraid at highly months do things on at. Situation recommend objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold feel<br />
              met spot shy want. Children me laughing we prospect answered followed. At it went <br />
              is song that held help face.
            </div>
            { good.price ? (
              <div className="shop__point">
                <span>Price:</span>
                <span className="shop__point-price">{good.price}</span>
              </div>
              ) : ''
            }
        </div>
      </Row>
    )
  }

  return (
  <>
    <Header
      pageType="banner"
      page="pleasure"
      title="For your pleasure"/>
    <section className="shop">
        <Container>
            {itemInfo()}
            <Line />
            <Goods onItemSelected={goodsSelected}/>
        </Container>
    </section>
  </>
  )
}

export default DbConsumer()(PleasurePage);
