import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {MainPage, CoffeePage, PleasurePage, ShopItem} from '../pages';
import Footer from '../footer';


const App = () => {

  return (
    <>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/coffee/' exact component={CoffeePage} />
        <Route path='/pleasure/' exact component={PleasurePage} />
        <Route path='/coffee/:name' exact render={
          ({match}) => {
            return <ShopItem name={match.params.name}/>
          }
        }/>
        <Route component={MainPage} />
      </Switch>
        <Footer />
    </>
  )
}

export default App
