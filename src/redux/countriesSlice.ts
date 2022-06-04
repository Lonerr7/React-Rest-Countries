import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { countriesAPI } from '../api/api';
import { CountriesState, CountryType } from '../types/types';

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await countriesAPI.getCountries();

      return data;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error.message);
    }
  }
);

const initialState: CountriesState = {
  countries: [],
  filteredCountries: [],
  searchText: '',
  isFetching: false,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    changeSearchText(state, action: PayloadAction<{ newText: string }>) {
      state.searchText = action.payload.newText;
    },
    displaySearchedCountries(state) {
      state.filteredCountries = state.countries.filter((c) =>
        c.name.common.toLowerCase().includes(state.searchText.toLowerCase())
      );
    },
  },
  extraReducers: {
    [getCountries.pending.type]: (state) => {
      state.isFetching = true;
    },
    [getCountries.fulfilled.type]: (
      state,
      action: PayloadAction<CountryType[]>
    ) => {
      state.countries = action.payload;
      state.filteredCountries = action.payload;
      state.isFetching = false;
    },
  },
});

export const { changeSearchText, displaySearchedCountries } =
  countriesSlice.actions;
export default countriesSlice.reducer;
