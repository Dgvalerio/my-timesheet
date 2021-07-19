import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';

export const routes = {
  home: (): string => `/`,
  login: (): string => `/login`,
  register: (): string => `/register`,
  settings: (): string => `/settings`,
  orphans: (): string => `/orphans`,
  tests: (): string => `/_`,
};

const RouterSwitch = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.home()} exact>
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default RouterSwitch;
