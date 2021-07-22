import React, { FC, FormEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import { signIn } from '../store/auth/actions';

const Page = styled.main`
  form,
  label,
  input,
  div {
    display: flex;
    width: 100%;
  }

  justify-content: center;
  padding: ${({ theme }) => theme.sizes.padding};

  form {
    flex-direction: column;
    margin: auto;

    @media (min-width: 0) {
      max-width: 60%;
    }

    @media (min-width: 1024px) {
      max-width: 40%;
    }

    gap: ${({ theme }) => theme.sizes.gap};

    h1 {
      font-size: 2.4rem;
    }

    input,
    button {
      padding: 0.6rem 0.8rem;
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
      font-size: 1.2rem;
      border-radius: 0.4rem;
      border: 1px solid ${({ theme }) => theme.colors.border};
    }

    button {
      cursor: pointer;
      outline: none;
      justify-content: center;

      &:hover {
        background-color: ${({ theme }) => theme.colors.text};
        color: ${({ theme }) => theme.colors.background};
      }

      &:active {
        background-color: #fff;
        color: #000;
      }
    }

    div {
      justify-content: space-between;
      gap: 0.8rem;
      width: 100%;

      > :nth-child(2) {
        margin-left: auto;
      }
    }
  }
`;

const SignIn: FC = () => {
  const dispatch = useDispatch();

  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const email = emailInput.current?.value;
    const password = passwordInput.current?.value;

    if (!email || !password) return;

    dispatch(signIn(email, password));
  };

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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
          <input id="password" type="password" placeholder="Senha" required />
        </label>
        <div>
          <button type="button">Cadastrar</button>
          <button type="button">Google</button>
          <button type="submit">Entrar</button>
        </div>
      </form>
    </Page>
  );
};

export default SignIn;
