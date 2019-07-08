import React from 'react';
import Header from '../header';
import {Container, Row} from 'reactstrap';
import './coffeePage.sass';
import ShopItemBody from '../shopItemBody';

const ShopItem = (props) => {

  const {name} = props;

  return (
  <>
    <Header
      pageType="banner"
      page="coffee"
      title={name}/>
    <section className="shop">
        <Container>
            <Row>
              <ShopItemBody name={name}/>
            </Row>
        </Container>
    </section>
  </>
  )
}

export default ShopItem;
