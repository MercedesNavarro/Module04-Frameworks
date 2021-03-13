import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import { MainScene } from '../../scenes';

export const RouterComponent: React.FunctionComponent = () => {
  const categoryName = 'cats';
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path={switchRoutes.root}
          component={() => <MainScene />}
        />
        <Route
          exact={true}
          path={switchRoutes.cats}
          component={() => <MainScene categoryName={'cats'} />}
        />
        <Route
          exact={true}
          path={switchRoutes.dogs}
          component={() => <MainScene categoryName={'dogs'} />}
        />
      </Switch>
    </Router>
  );
};
