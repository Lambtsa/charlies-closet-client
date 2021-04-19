import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs';
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
  </BrowserRouter>
);

export default App;
