import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Values from './components/Values';
import './main.scss';

const App = () => (
  <BrowserRouter>
    <Header />
    <Jumbotron />
    <Values />
    <AboutUs />
  </BrowserRouter>
);

export default App;
