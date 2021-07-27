import firebase from 'firebase/app';

export type firebaseUser = firebase.User;
export type firebaseUserCredential = firebase.auth.AuthCredential;

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
  credential: IUserCredential | firebaseUserCredential | null;
  settings: ISettings;
}

export interface IUIState {
  theme: 'dark' | 'light';
}
