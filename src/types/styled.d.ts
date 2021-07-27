/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { darkTheme as theme } from '../styles/theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
