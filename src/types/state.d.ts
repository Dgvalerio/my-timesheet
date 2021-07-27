import 'react-redux';
import { IAuthState, IUIState } from './interfaces';

declare module 'react-redux' {
  export interface DefaultRootState {
    auth: IAuthState;
    ui: IUIState;
  }
}
