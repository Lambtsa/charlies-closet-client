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

import OnboardingMyBaby from './views/onboarding/OnboardingMyBaby';
import OnboardingMyBox from './views/onboarding/OnboardingMyBox';
import OnboardingMyDetails from './views/onboarding/OnboardingMyDetails';
import OnboardingPayment from './views/onboarding/OnboardingPayment';

import AccountMyBaby from './views/account/AccountMyBaby';
import AccountMyBox from './views/account/AccountMyBox';
import AccountMyDetails from './views/account/AccountMyDetails';

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
        <Route exact path="/onboarding/my-baby" component={OnboardingMyBaby} />
        <Route exact path="/onboarding/my-box" component={OnboardingMyBox} />
        <Route exact path="/onboarding/my-details" component={OnboardingMyDetails} />
        <Route exact path="/onboarding/payment" component={OnboardingPayment} />
        <Route exact path="/account/my-baby" component={AccountMyBaby} />
        <Route exact path="/account/my-box" component={AccountMyBox} />
        <Route exact path="/account/my-details" component={AccountMyDetails} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
