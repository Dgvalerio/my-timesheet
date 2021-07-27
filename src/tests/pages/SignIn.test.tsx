/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import SignIn from '../../pages/SignIn';
import { screen, render } from '../Wrapper';

describe('Page -> SignIn (Visual)', () => {
  test('Mostra o título "Login"', () => {
    render(<SignIn />);
    const linkElement = screen.getByText(/Login/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Contém inputs de email e password', async () => {
    render(<SignIn />);

    const inputEmail = screen.getByPlaceholderText(/E-mail/i);
    expect(inputEmail).toBeInTheDocument();

    const inputPassword = screen.getByPlaceholderText(/Senha/i);
    expect(inputPassword).toBeInTheDocument();
  });

  test('Contém botões de cadastro, logar com google e entrar', async () => {
    render(<SignIn />);

    const btnCadastrar = screen.getByText(/Cadastrar/i);
    expect(btnCadastrar).toBeInTheDocument();

    const btnGoogle = screen.getByText(/Google/i);
    expect(btnGoogle).toBeInTheDocument();

    const btnEntrar = screen.getByText(/Entrar/i);
    expect(btnEntrar).toBeInTheDocument();
  });
});
