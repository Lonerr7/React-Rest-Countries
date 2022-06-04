import { createSlice } from '@reduxjs/toolkit';
import { ThemeState } from '../types/types';

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload.newTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
