import { signInSuccess, signOut } from '../../store/auth/actions';
import authReducer from '../../store/auth/slice';

describe('Redux -> Autenticação', () => {
  test('Retorna o estado inicial', () => {
    expect(authReducer(undefined, { type: '' })).toEqual({
      email: '',
      signed: false,
    });
  });

  test('Consegue realizar o SignIn', () => {
    expect(authReducer(undefined, signInSuccess('email@email.com'))).toEqual({
      email: 'email@email.com',
      signed: true,
    });
  });

  test('Consegue realizar o SignOut', () => {
    expect(authReducer(undefined, signOut())).toEqual({
      email: '',
      signed: false,
    });
  });
});
