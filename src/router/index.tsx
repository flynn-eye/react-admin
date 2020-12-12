import React, { Suspense } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import AsyncRouter from './asyncRouter';
const Login = React.lazy(() => import('../pages/login'));
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
              <Suspense fallback={<div>waiting</div>}>
                <Login />
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
