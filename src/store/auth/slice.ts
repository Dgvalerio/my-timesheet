/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState } from '../../types/interfaces';

const initialState: IAuthState = { email: '', signed: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInSuccess(state: IAuthState, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const { actions } = authSlice;
export default authSlice.reducer;
