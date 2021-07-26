import { actions } from './slice';

const { signInSuccess, signOut } = actions;

const signIn =
  (email: string, password: string) =>
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
  (dispatch: any): void => {
    if (email && password) dispatch(signInSuccess(email));
  };

export { signIn, signInSuccess, signOut };
