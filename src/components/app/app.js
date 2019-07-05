import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {MainPage} from '../pages';


const App = () => {

  return (
    <Router>
       <Route path='/' exact component={MainPage} />
    </Router>
  )
}

export default App
