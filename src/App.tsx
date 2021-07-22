import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Footer, Header } from './components';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

export const routes = {
  home: (): string => `/`,
  signIn: (): string => `/signIn`,
  signUp: (): string => `/signUp`,
  signOut: (): string => `/signOut`,
  settings: (): string => `/settings`,
};

const App: FC = () => {
  const { signed } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      <Switch>
        <Route path={routes.home()} exact>
          {signed ? <Home /> : <Redirect to={routes.signIn()} />}
        </Route>
        <Route path={routes.signIn()} exact>
          {!signed ? <SignIn /> : <Redirect to={routes.home()} />}
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
