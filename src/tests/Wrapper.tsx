/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';

import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { render as rtlRender, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import authReducer from '../store/auth/slice';
import { darkTheme as theme } from '../styles/theme';

const render = (
  ui: ReactElement,
  {
    preloadedState,
    store = configureStore({ reducer: { auth: authReducer }, preloadedState }),
    ...renderOptions
  }: { preloadedState?: any; store?: EnhancedStore } = {}
): RenderResult => {
  const Wrapper: FC = ({ children }: { children?: ReactNode }) => (
    <ThemeProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
