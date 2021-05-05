import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './main.scss';

/*
  Views
*/
import Home from './views/Home';
import Login from './views/Login';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
