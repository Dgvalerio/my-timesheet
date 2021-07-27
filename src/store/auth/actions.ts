/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Dispatch } from 'react';
import { toast } from 'react-toastify';

import firebase from 'firebase/app';

import { fireAuth } from '../../services/firebase';
import { IUser, IUserCredential } from '../../types/interfaces';
import { actions } from './slice';

const { signInSuccess, signOut } = actions;

const signIn =
  (email: string, password: string) =>
  (dispatch: Dispatch<any>): void => {
    if (email && password) console.log({ email });
  };

const googleSignIn = () => async (dispatch: Dispatch<any>) => {
  console.log('handleGoogleClick -> googleSignIn');
  try {
    const { credential, user } = await fireAuth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );

    if (!user) return;

    const formattedUser: IUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber: user.phoneNumber,
    };

    if (!credential) return;

    const formattedCredential: IUserCredential = {
      providerId: credential.providerId,
      signInMethod: credential.signInMethod,
      // @ts-ignore
      accessToken: credential.accessToken,
      // @ts-ignore
      idToken: credential.idToken,
    };

    dispatch(
      signInSuccess({ user: formattedUser, credential: formattedCredential })
    );
  } catch ({ message }) {
    toast.error(message || 'Erro ao realizar login com o Google!');
  }
};

export { signIn, signInSuccess, signOut, googleSignIn };
