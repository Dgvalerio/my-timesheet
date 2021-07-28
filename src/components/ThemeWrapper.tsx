import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/global';
import { darkTheme, lightTheme } from '../styles/theme';

import 'react-toastify/dist/ReactToastify.css';

const ThemeWrapper: FC = ({ children }) => {
  const { theme } = useSelector((state) => state.ui);

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      {children}
      <GlobalStyle />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default ThemeWrapper;
