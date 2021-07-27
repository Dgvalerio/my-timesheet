/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState, IUser, IUserCredential } from '../../types/interfaces';

const initialState: IAuthState = {
  signed: false,
  user: null,
  credential: null,
  settings: {
    startOfWork: '07:30',
    workingHours: '06:00',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInSuccess(
      state: IAuthState,
      action: PayloadAction<{
        user: IUser;
        credential: IUserCredential | null;
      }>
    ) {
      state.user = action.payload.user;
      state.credential = action.payload.credential;
      state.signed = true;
    },
    signOut(state: IAuthState) {
      state.user = null;
      state.signed = false;
    },
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
