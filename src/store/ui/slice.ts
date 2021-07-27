/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

import { IUIState } from '../../types/interfaces';

const initialState: IUIState = { theme: 'dark' };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleThemeMode(state: IUIState) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { actions } = uiSlice;
export default uiSlice.reducer;
