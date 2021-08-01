import React, { FC, FormEvent, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { routes } from '../App';
import Input from '../components/Input';
import { signUp } from '../store/auth/actions';
import Wrapper from '../styles/pages/Authentication';

const SignUp: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);

  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleBack = () => history.push(routes.signIn());

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const name = nameInput.current?.value;
    const email = emailInput.current?.value;

    if (!name || !email || !password || !passwordConfirm) {
      toast.error('Preencha todos os campos!');
      return;
    }
    if (passwordDontMatch) {
      toast.error('As senhas não conferem!');
      return;
    }
    dispatch(signUp(name, email, password, passwordConfirm));
  };

  const passwordDontMatch = password !== passwordConfirm;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} autoComplete="off">
        <h1>Cadastro</h1>
        <Input id="name" placeholder="Nome" ref={nameInput} />
        <Input id="email" type="email" placeholder="E-mail" ref={emailInput} />
        <Input
          id="password"
          type="password"
          placeholder="Senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          error={passwordDontMatch}
        />
        <Input
          id="password-confirm"
          type="password"
          placeholder="Confirmação de senha"
          value={passwordConfirm}
          onChange={({ target }) => setPasswordConfirm(target.value)}
          error={passwordDontMatch}
        />
        {passwordDontMatch && (
          <p style={{ color: '#792622' }}>As senhas não conferem!</p>
        )}
        <div>
          <button type="button" onClick={handleBack}>
            Voltar
          </button>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SignUp;
