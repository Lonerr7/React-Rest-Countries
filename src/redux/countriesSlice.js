import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: 'light',
  countries: [],
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload.newTheme;
    },
  },
});

export const { changeTheme } = countriesSlice.actions;
export default countriesSlice.reducer;
