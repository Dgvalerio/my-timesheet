import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';

const firebaseConfig = {
  apiKey: 'AIzaSyBzngVJ2Pfh_Y3JI73E3byozgbMjTxgIwk',
  authDomain: 'totimesheet.firebaseapp.com',
  projectId: 'totimesheet',
  storageBucket: 'totimesheet.appspot.com',
  messagingSenderId: '924638638579',
  appId: '1:924638638579:web:b331a9ca16897a66c16286',
};

// Initialize Firebase
export const fire = firebase.initializeApp(firebaseConfig);
export const fireAuth = fire.auth();
export const fireDB = fire.firestore();
export const firePerformance = fire.performance();

export const fireProvider = new firebase.auth.GoogleAuthProvider();
