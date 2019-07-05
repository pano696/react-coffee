import React from 'react';
import Header from '../header';

const MainPage = () => {

  return (
  <>
    <Header
      page="main"
      title="Everything You Love About Coffee"
      beansLogo="white"
      subtitle={['We makes every day full of energy and taste', 'Want to try our beans?']}
      button="More"/>
    <h2>MainPage</h2>
  </>
  )
}

export default MainPage;
