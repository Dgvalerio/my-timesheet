import React, { FC, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));

export const routes = {
  home: (): string => `/`,
  signIn: (): string => `/signIn`,
  signUp: (): string => `/signUp`,
  settings: (): string => `/settings`,
};

const App: FC = () => {
  const { signed } = useSelector((state) => state.auth);

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Header />
      <Switch>
        <Route path={routes.home()} exact>
          {signed ? <Home /> : <Redirect to={routes.signIn()} />}
        </Route>
        {!signed && (
          <Route path={routes.signIn()} exact>
            <SignIn />
          </Route>
        )}
        {!signed && (
          <Route path={routes.signUp()} exact>
            <SignUp />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default App;
