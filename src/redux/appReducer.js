import { countriesAPI } from '../api/api';

const CHANGE_THEME = 'CHANGE_THEME';
const GET_COUNTRIES = 'GET_COUNTRIES';

const initialState = {
  theme: 'light',
  countries: [],
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

export const changeThemeTC = (theme) => (dispatch) => {
  dispatch(changeThemeAC(theme));

  document.body.setAttribute('data-theme', theme);
};

export const getCountriesTC = () => async (dispatch) => {
  const response = await countriesAPI.getCountries();
  console.log(response.data);
  dispatch(getCountriesAC(response.data));
};

export default appReducer;
