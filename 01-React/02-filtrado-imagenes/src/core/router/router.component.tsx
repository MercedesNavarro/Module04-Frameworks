import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { ImagesListComponent } from '../../pods';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={switchRoutes.root}
          component={() => <ImagesListComponent />}
        />
        <Route
          exact={true}
          path={switchRoutes.cats}
          component={() => <ImagesListComponent categoryName={'cats'} />}
        />
        <Route
          exact={true}
          path={switchRoutes.dogs}
          component={() => <ImagesListComponent categoryName={'dogs'} />}
        />
      </Switch>
    </Router>
  );
};
