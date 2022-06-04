import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { countriesAPI } from '../api/api';
import { CountryType, CurrentCountryState } from '../types/types';

export const getCountriesBorders = createAsyncThunk(
  'currentCountry/getCountriesBorders',
  async function (borders: string) {
    const response = await countriesAPI.getCountryBorders(borders);

    return response.data;
  }
);

export const getCurrentCountry = createAsyncThunk(
  'currentCountry/getCurrentCountry',
  async function (countryName: string, { dispatch }) {
    try {
      const response = await countriesAPI.getCurrentCountry(countryName);
      const country = response.data[0];

      const borders: string | null = country.hasOwnProperty('borders')
        ? country.borders.join()
        : null;

      if (borders) {
        await dispatch(getCountriesBorders(borders));
      }

      return country;
    } catch (error) {}
  }
);

const initialState: CurrentCountryState = {
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
      state.currentCountryNeighbors = [];
    },
  },
  extraReducers: {
    [getCurrentCountry.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCurrentCountry.fulfilled.type]: (
      state,
      action: PayloadAction<CountryType>
    ) => {
      state.isLoading = false;
      state.currentCountry = action.payload;
    },
    [getCountriesBorders.fulfilled.type]: (
      state,
      action: PayloadAction<CountryType[]>
    ) => {
      state.currentCountryNeighbors = action.payload;
    },
  },
});

export const { resetCurrentCountry } = currentCountrySlice.actions;
export default currentCountrySlice.reducer;
