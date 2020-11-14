import React, { Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import routes, { errorRoutes } from './route';
const AsyncRouter = (props: any) => {
  let token = '321312';
  let role = 'admin';
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />
        {routes.map((item) => {
          if (item.role.includes(role)) {
            let AsyncComponent = item.component;
            return (
              <Route
                exact
                key={item.path}
                path={item.path}
                render={() => {
                  return (
                    <Suspense fallback={<div>123</div>}>
                      {AsyncComponent ? <AsyncComponent /> : null}
                    </Suspense>
                  );
                }}
              />
            );
          } else {
            return (
              <Route
                key={errorRoutes[0].path}
                render={() => {
                  let Error403 = errorRoutes[0].component;
                  return (
                    <Suspense fallback={<div>123</div>}>{Error403 ? <Error403 /> : null}</Suspense>
                  );
                }}
              />
            );
          }
        })}
        <Route
          key={errorRoutes[1].path}
          render={() => {
            let Error404 = errorRoutes[1].component;
            return <Suspense fallback={<div>123</div>}>{Error404 ? <Error404 /> : null}</Suspense>;
          }}
        />
      </Switch>
    </div>
  );
};
export default AsyncRouter;
