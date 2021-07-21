import React, { FC } from 'react';

import styled from 'styled-components';

const Page = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 1rem;
  gap: ${({ theme }) => theme.sizes.gap};

  margin-top: auto;
  margin-bottom: auto;

  @media (min-width: 0) {
    min-width: 60%;
  }

  @media (min-width: 1024px) {
    min-width: 40%;
  }

  h1 {
    font-size: 2.4rem;
  }

  button,
  input {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.2rem;
    border-radius: 0.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }

  button {
    width: 100%;
    max-width: 8rem;
    padding: 0.6rem 0.8rem;
    cursor: pointer;
    outline: none;

    &:hover {
      background-color: ${({ theme }) => theme.colors.text};
      color: ${({ theme }) => theme.colors.background};
    }

    &:active {
      background-color: #fff;
      color: #000;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    width: 100%;

    & > input {
      padding: 0.6rem 0.8rem;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    gap: 0.8rem;
    width: 100%;

    > :nth-child(2) {
      margin-left: auto;
    }
  }
`;

const SignIn: FC = () => (
  <Page>
    <h1>Login</h1>
    <label htmlFor="email">
      <input id="email" type="email" placeholder="E-mail" />
    </label>
    <label htmlFor="password">
      <input id="password" type="password" placeholder="Senha" />
    </label>
    <div>
      <button type="button">Cadastrar</button>
      <button type="button">Google</button>
      <button type="submit">Entrar</button>
    </div>
  </Page>
);

export default SignIn;
