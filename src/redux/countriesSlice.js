import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { countriesAPI } from '../api/api';

const initialState = {
  countries: [],
  filteredCountries: [],
  searchText: '',
  isFetching: false,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    changeSearchText(state, action) {
      state.searchText = action.payload.newText;
    },
    displaySearchedCountries(state) {
      state.filteredCountries = state.countries.filter((c) =>
        c.name.common.toLowerCase().includes(state.searchText.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.filteredCountries = action.payload;
        state.isFetching = false;
      })
      .addCase(getCountries.pending, (state) => {
        state.isFetching = true;
      });
  },
});

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async function (_, { rejectWithValue }) {
    try {
      const response = await countriesAPI.getCountries();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { changeSearchText, displaySearchedCountries } =
  countriesSlice.actions;
export default countriesSlice.reducer;
