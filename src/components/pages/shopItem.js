import React from 'react';
import Header from '../header';
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
        <ShopItemBody name={name}/>
    </section>
  </>
  )
}

export default ShopItem;
