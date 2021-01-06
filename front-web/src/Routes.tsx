import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Navbar';
import Orders from './Orders/Orders';

export default function Routes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/orders">
          <Orders />
        </Route>
        <Route path="">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
