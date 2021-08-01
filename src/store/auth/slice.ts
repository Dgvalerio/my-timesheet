/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState, IUser } from '../../types/interfaces';

const initialState: IAuthState = {
  signed: false,
  user: null,
  token: null,
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
        token: string;
      }>
    ) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.signed = true;
    },
    signOut(state: IAuthState) {
      state.user = null;
      state.token = null;
      state.signed = false;
    },
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
