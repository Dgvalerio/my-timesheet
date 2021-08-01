import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import firebase from 'firebase/app';

export type firebaseUser = firebase.User;
export type FieldPath = firebase.firestore.FieldPath;
export type OrderByDirection = firebase.firestore.OrderByDirection;
export type DocumentReference = firebase.firestore.DocumentReference;

export interface IInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: boolean;
}

export interface IUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
}

export interface IUserCredential {
  providerId: string | null;
  signInMethod: string | null;
  accessToken: string | null;
  idToken: string | null;
}

export interface ISettings {
  id?: string;
  startOfWork: string;
  workingHours: string;
}

export interface IAuthState {
  signed: boolean;
  user: IUser | firebaseUser | null;
  token: string | null;
  settings: ISettings;
}

export interface IUIState {
  theme: 'dark' | 'light';
}
