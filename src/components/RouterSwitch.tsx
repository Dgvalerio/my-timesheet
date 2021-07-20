import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Footer from './Footer';
import Header from './Header';

export const routes = {
  home: (): string => `/`,
  login: (): string => `/login`,
  register: (): string => `/register`,
  settings: (): string => `/settings`,
  orphans: (): string => `/orphans`,
  tests: (): string => `/_`,
};

const RouterSwitch: FC = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path={routes.home()} exact>
        <Home />
      </Route>
    </Switch>
    <Footer />
  </BrowserRouter>
);

export default RouterSwitch;
