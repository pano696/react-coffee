import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MainPage, CoffeePage, PleasurePage} from '../pages';
import Footer from '../footer';


const App = () => {

  return (
    <Router>
        <Route path='/' exact component={MainPage} />
        <Route path='/coffee' exact component={CoffeePage} />
        <Route path='/pleasure' exact component={PleasurePage} />
        <Footer />
    </Router>
  )
}

export default App
