import React, { Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from '../pages/login';
import AsyncRouter from './asyncRouter';
const Ss = React.lazy(() => import('../pages/login'));
export default () => {
  let token = '321';
  return (
    <HashRouter>
      <Switch>
        <Route
          exact
          path="/login"
          render={() => {
            return (
              <Suspense fallback={<div>wait</div>}>
                <Ss />
              </Suspense>
            );
          }}
        ></Route>
        <Route
          path="/"
          render={() => {
            if (token) {
              return <AsyncRouter />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
      </Switch>
    </HashRouter>
  );
};
