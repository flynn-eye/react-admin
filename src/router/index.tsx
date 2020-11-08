import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/login';
export default () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </HashRouter>
  );
};
