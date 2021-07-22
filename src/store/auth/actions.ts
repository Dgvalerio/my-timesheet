import { actions } from './slice';

const { signInSuccess } = actions;

const signIn = (email: string, password: string) => (dispatch: any) => {
  if (email && password) dispatch(signInSuccess(email));
};

export { signIn, signInSuccess };
