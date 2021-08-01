/* eslint-disable no-throw-literal */
import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import { Action } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

import { fireAuth } from '../../services/firebase';
import { firebaseUser, IUser } from '../../types/interfaces';
import { actions } from './slice';

const { signInSuccess, signOut } = actions;

const processUser = (user: firebaseUser): IUser => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  phoneNumber: user.phoneNumber,
});

const signIn =
  (email: string, password: string) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      const { user } = await fireAuth.signInWithEmailAndPassword(
        email,
        password
      );

      if (!user) return;

      if (!fireAuth.currentUser)
        throw {
          code: 'sign-in-without-user',
          message: 'Erro ao logar após cadastrar, tente novamente.',
        };

      const token = await fireAuth.currentUser.getIdToken();

      await dispatch(
        signInSuccess({
          user: processUser(user),
          token,
        })
      );
    } catch ({ message }) {
      toast.error(message || 'Erro ao realizar login!');
    }
  };

const signUp =
  (name: string, email: string, password: string, passwordConfirm: string) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      if (password !== passwordConfirm)
        throw {
          code: 'different-passwords',
          message: 'As senhas não conferem, tente novamente.',
        };

      const { user } = await fireAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!fireAuth.currentUser)
        throw {
          code: 'sign-in-without-user',
          message: 'Erro ao logar após cadastrar, tente novamente.',
        };

      await fireAuth.currentUser.updateProfile({ displayName: name });
      const token = await fireAuth.currentUser.getIdToken();

      if (!user) return;

      await dispatch(
        signInSuccess({
          user: processUser(user),
          token,
        })
      );
    } catch ({ message, code }) {
      switch (code) {
        case 'different-passwords':
          toast.error(message);
          break;
        case 'auth/email-already-in-use':
          toast.error(
            'Esse endereço de e-mail já está sendo usado por outra conta.'
          );
          break;
        case 'auth/weak-password':
          toast.error('A senha deve ter pelo menos 6 caracteres .');
          break;
        default:
          toast.error(message);
      }
    }
  };

const googleSignIn =
  () =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      const { user } = await fireAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );

      if (!user) return;

      if (!fireAuth.currentUser)
        throw {
          code: 'sign-in-without-user',
          message: 'Erro ao logar após cadastrar, tente novamente.',
        };

      const token = await fireAuth.currentUser.getIdToken();

      await dispatch(
        signInSuccess({
          user: processUser(user),
          token,
        })
      );
    } catch ({ message }) {
      toast.error(message || 'Erro ao realizar login com o Google!');
    }
  };

export { signIn, signUp, signInSuccess, signOut, googleSignIn };
