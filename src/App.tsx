import React, { FC, lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Footer, Header } from './components';
import ThemeWrapper from './components/ThemeWrapper';

const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));

export const routes = {
  home: (): string => `/`,
  signIn: (): string => `/signIn`,
  signUp: (): string => `/signUp`,
  settings: (): string => `/settings`,
};

const App: FC = () => {
  const { signed } = useSelector((state) => state.auth);

  return (
    <ThemeWrapper>
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
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </ThemeWrapper>
  );
};

export default App;
