import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { darkTheme, lightTheme } from '../styles/theme';

const ThemeWrapper: FC = ({ children }) => {
  const { theme } = useSelector((state) => state.ui);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
