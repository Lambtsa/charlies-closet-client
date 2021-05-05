import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './main.scss';

/*
  Views
*/
import Home from './views/Home';
import Boxes from './views/Boxes';
import Boutique from './views/Boutique';
import Register from './views/Register';
import Login from './views/Login';
import AboutUs from './views/AboutUs';
import FAQ from './views/FAQ';
import Terms from './views/Terms';
import ContactUs from './views/ContactUs';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/boxes" component={Boxes} />
        <Route exact path="/boutique" component={Boutique} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/contact-us" component={ContactUs} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
