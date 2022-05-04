import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { countriesAPI } from '../api/api';

const initialState = {
  currentCountry: {},
  currentCountryNeighbors: [],
  isLoading: false,
};

const currentCountrySlice = createSlice({
  name: 'currentCountry',
  initialState,
  reducers: {
    resetCurrentCountry(state) {
      state.currentCountry = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentCountry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentCountry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentCountry = action.payload;
      })
      .addCase(getCountriesBorders.fulfilled, (state, action) => {
        state.currentCountryNeighbors = action.payload;
      });
  },
});

export const getCountriesBorders = createAsyncThunk(
  'currentCountry/getCountriesBorders',
  async function ({ borders }) {
    const response = await countriesAPI.getCountryBorders(borders);

    return response.data;
  }
);

export const getCurrentCountry = createAsyncThunk(
  'currentCountry/getCurrentCountry',
  async function ({ countryName }, { dispatch }) {
    try {
      const response = await countriesAPI.getCurrentCountry(countryName);
      const country = response.data[0];
      const borders = country.borders.join();

      await dispatch(getCountriesBorders({ borders }));

      return country;
    } catch (error) {}
  }
);

export const { resetCurrentCountry } = currentCountrySlice.actions;
export default currentCountrySlice.reducer;
