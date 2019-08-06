import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ResultDetails from './ResultDetails';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/resultdetails" component={ResultDetails}/>
    </Switch>
  </BrowserRouter>
)

export default Router;