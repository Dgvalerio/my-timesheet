import 'react-redux';
import { IAuthState } from '../store/auth/slice';

declare module 'react-redux' {
  export interface DefaultRootState {
    auth: IAuthState;
  }
}
