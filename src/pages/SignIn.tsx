import React, { FC, FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { routes } from '../App';
import Input from '../components/Input';
import { googleSignIn, signIn } from '../store/auth/actions';
import Wrapper from '../styles/pages/Authentication';

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

    if (!email || !password) {
      toast.error('Preencha todos os campos!');
      return;
    }

    dispatch(signIn(email, password));
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <h1>Entrar</h1>
        <Input id="email" type="email" placeholder="E-mail" ref={emailInput} />
        <Input
          id="password"
          type="password"
          placeholder="Senha"
          ref={passwordInput}
        />
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
