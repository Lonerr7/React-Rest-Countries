import { countriesAPI } from '../api/api';

const CHANGE_THEME = 'CHANGE_THEME';
const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_CURRENT_COUNTRY = 'GET_CURRENT_COUNTRY';
const GET_CURRENT_COUNTRY_NEIGHBORS = 'GET_CURRENT_COUNTRY_NEIGHBORS';

const initialState = {
  theme: 'light',
  countries: [],
  currentCountry: {},
  currentCountryNeighbors: [],
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

export const changeThemeTC = (theme) => (dispatch) => {
  dispatch(changeThemeAC(theme));

  document.body.setAttribute('data-theme', theme);
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
      console.log(response.data[0]);

      const borders = getState().app.currentCountry.borders.join();
      console.log(borders);

      await dispatch(getCountryNeighborsTC(borders));
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
