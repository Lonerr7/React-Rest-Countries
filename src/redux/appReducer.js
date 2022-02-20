import { countriesAPI } from '../api/api';

const CHANGE_THEME = 'CHANGE_THEME';
const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_CURRENT_COUNTRY = 'GET_CURRENT_COUNTRY';
const GET_CURRENT_COUNTRY_NEIGHBORS = 'GET_CURRENT_COUNTRY_NEIGHBORS';
const CHANGE_SEARCH_TEXT = 'CHANGE_SEARCH_TEXT';
const DISPLAY_SEARCHED_COUNTRIES = 'DISPLAY_SEARCHED_COUNTRIES';

const initialState = {
  theme: 'light',
  countries: [],
  currentCountry: {},
  currentCountryNeighbors: [],
  filteredCountries: [],
  searchText: '',
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.countries,
        filteredCountries: action.countries,
      };
    case GET_CURRENT_COUNTRY:
      return {
        ...state,
        currentCountry: action.currentCountry,
      };
    case GET_CURRENT_COUNTRY_NEIGHBORS:
      return {
        ...state,
        currentCountryNeighbors: action.currentCountryNeighbors,
      };
    case CHANGE_SEARCH_TEXT:
      return {
        ...state,
        searchText: action.newSearchText,
      };
    case DISPLAY_SEARCHED_COUNTRIES:
      return {
        ...state,
        filteredCountries: state.countries.filter((t) =>
          t.name.common.toLowerCase().includes(action.searchText)
        ),
      };
    default:
      return state;
  }
};

export const changeThemeAC = (theme) => ({
  type: CHANGE_THEME,
  theme,
});

const getCountriesAC = (countries) => ({
  type: GET_COUNTRIES,
  countries,
});

export const getCurrentCountryAC = (currentCountry) => ({
  type: GET_CURRENT_COUNTRY,
  currentCountry,
});

const getCountryNeighborsAC = (currentCountryNeighbors) => ({
  type: GET_CURRENT_COUNTRY_NEIGHBORS,
  currentCountryNeighbors,
});

export const changeSearchTextAC = (newSearchText) => ({
  type: CHANGE_SEARCH_TEXT,
  newSearchText,
});

export const displaySearchedCountriesAC = (searchText) => ({
  type: DISPLAY_SEARCHED_COUNTRIES,
  searchText,
});

export const changeThemeTC = (theme) => (dispatch) => {
  dispatch(changeThemeAC(theme));

  document.body.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

export const getCountriesTC = () => async (dispatch) => {
  const response = await countriesAPI.getCountries();
  dispatch(getCountriesAC(response.data));
};

export const getCurrentCountryTC =
  (countryName) => async (dispatch, getState) => {
    try {
      const response = await countriesAPI.getCurrentCountry(countryName);

      dispatch(getCurrentCountryAC(response.data[0]));

      if (getState().app.currentCountry.borders) {
        const bordersStr = getState().app.currentCountry.borders.join();
        await dispatch(getCountryNeighborsTC(bordersStr));
      }
    } catch (error) {
      console.error(error);
    }
  };

const getCountryNeighborsTC = (countryBorders) => async (dispatch) => {
  try {
    const response = await countriesAPI.getCountryBorders(countryBorders);

    dispatch(getCountryNeighborsAC(response.data));
  } catch (error) {
    console.error(error);
  }
};

export default appReducer;
