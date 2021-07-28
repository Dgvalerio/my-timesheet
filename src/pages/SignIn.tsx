import React, { FC, FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { routes } from '../App';
import { googleSignIn, signIn } from '../store/auth/actions';
import Wrapper from '../styles/pages/SignIn';

const SignIn: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleSignUpClick = () => history.push(routes.signUp());

  const handleGoogleClick = () => dispatch(googleSignIn());

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;

    if (!email || !password) return;

    dispatch(signIn(email, password));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <label htmlFor="email">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            required
            ref={emailInput}
          />
        </label>
        <label htmlFor="password">
          <input
            id="password"
            type="password"
            placeholder="Senha"
            required
            ref={passwordInput}
          />
        </label>
        <div>
          <button type="button" onClick={handleSignUpClick}>
            Cadastrar
          </button>
          <button type="button" onClick={handleGoogleClick}>
            Google
          </button>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SignIn;
