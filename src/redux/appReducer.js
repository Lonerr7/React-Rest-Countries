const CHANGE_THEME = 'CHANGE_THEME';

const initialState = {
  theme: 'light',
  countries: {},
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };
    default:
      return state;
  }
};

export const changeThemeAC = (theme) => ({
  type: CHANGE_THEME,
  theme,
});

export const changeThemeTC = (theme) => (dispatch) => {
  dispatch(changeThemeAC(theme));

  document.body.setAttribute('data-theme', theme);
};

export default appReducer;
