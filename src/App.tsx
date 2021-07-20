import React, { FC } from 'react';

import { ThemeProvider } from 'styled-components';

import RouterSwitch from './components/RouterSwitch';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

const App: FC = () => (
  <ThemeProvider theme={theme}>
    <RouterSwitch />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
