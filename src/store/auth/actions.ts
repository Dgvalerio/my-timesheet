/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import { Action } from '@reduxjs/toolkit';
import firebase from 'firebase/app';

import { fireAuth } from '../../services/firebase';
import {
  firebaseUser,
  firebaseUserCredential,
  IUser,
  IUserCredential,
} from '../../types/interfaces';
import { actions } from './slice';

const { signInSuccess, signOut } = actions;

const processUser = (user: firebaseUser): IUser => ({
  uid: user.uid,
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  phoneNumber: user.phoneNumber,
});

const processCredential = (
  credential: firebaseUserCredential
): IUserCredential => ({
  providerId: credential.providerId,
  signInMethod: credential.signInMethod,
  // @ts-ignore
  accessToken: credential.accessToken,
  // @ts-ignore
  idToken: credential.idToken,
});

const signIn =
  (email: string, password: string) =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      const { credential, user } = await fireAuth.signInWithEmailAndPassword(
        email,
        password
      );

      if (!user) return;

      if (!credential) return;

      await dispatch(
        signInSuccess({
          user: processUser(user),
          credential: processCredential(credential),
        })
      );
    } catch ({ message }) {
      toast.error(message || 'Erro ao realizar login!');
    }
  };

const googleSignIn =
  () =>
  async (dispatch: Dispatch<Action>): Promise<void> => {
    try {
      const { credential, user } = await fireAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );

      if (!user) return;

      if (!credential) return;

      await dispatch(
        signInSuccess({
          user: processUser(user),
          credential: processCredential(credential),
        })
      );
    } catch ({ message }) {
      toast.error(message || 'Erro ao realizar login com o Google!');
    }
  };

export { signIn, signInSuccess, signOut, googleSignIn };
