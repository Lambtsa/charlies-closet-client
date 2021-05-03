import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/*
  Components
*/
import AboutUs from './components/AboutUs';
import Copyright from './components/Copyright';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Service from './components/Service';
import Values from './components/Values';
import './main.scss';

const App = () => (
  <BrowserRouter>
    <Header />
    <Jumbotron />
    <Values />
    <AboutUs />
    <Service />
    <Copyright />
  </BrowserRouter>
);

export default App;
