import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './main.scss';

/*
  Views
*/
import Home from './views/public/Home';
import Boxes from './views/public/Boxes';
import Boutique from './views/public/Boutique';
import Register from './views/public/Register';
import Login from './views/public/Login';
import AboutUs from './views/public/AboutUs';
import FAQ from './views/public/FAQ';
import Terms from './views/public/Terms';
import ContactUs from './views/public/ContactUs';
import Privacy from './views/public/Privacy';
import ItemDetails from './views/public/ItemDetails';

import MyBaby from './views/account/MyBaby';
import MyBox from './views/account/MyBox';
import MyDetails from './views/account/MyDetails';
import Payment from './views/account/Payment';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/boxes" component={Boxes} />
        <Route exact path="/boutique" component={Boutique} />
        <Route exact path="/boutique/:id" component={ItemDetails} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/terms" component={Terms} />
        <Route exact path="/contact-us" component={ContactUs} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/onboarding/my-baby" component={MyBaby} />
        <Route exact path="/onboarding/my-box" component={MyBox} />
        <Route exact path="/onboarding/my-box" component={MyBox} />
        <Route exact path="/onboarding/my-details" component={MyDetails} />
        <Route exact path="/onboarding/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
