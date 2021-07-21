import React, { FC } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Footer from './Footer';
import Header from './Header';

export const routes = {
  home: (): string => `/`,
  signIn: (): string => `/login`,
  signOut: (): string => `/register`,
  settings: (): string => `/settings`,
  orphans: (): string => `/orphans`,
  tests: (): string => `/_`,
};

const RouterSwitch: FC = () => {
  const auth = false;

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path={routes.home()} exact>
          {auth ? <Home /> : <Redirect to={routes.signIn()} />}
        </Route>
        <Route path={routes.signIn()} exact>
          {!auth ? <SignIn /> : <Redirect to={routes.home()} />}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterSwitch;
