import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MainPage, CoffeePage, PleasurePage} from '../pages';


const App = () => {

  return (
    <Router>
        <Route path='/' exact component={MainPage} />
        <Route path='/coffee' exact component={CoffeePage} />
        <Route path='/pleasure' exact component={PleasurePage} />
    </Router>
  )
}

export default App
