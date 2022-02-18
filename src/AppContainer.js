import { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { changeThemeTC, getCountriesTC } from './redux/appReducer';

const AppContainer = (props) => {
  useEffect(() => {
    document.body.setAttribute('data-theme', props.theme);

    // props.getCountries();
  }, [props.theme]);

  return <App />;
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});

const dispatchToProps = {
  changeTheme: changeThemeTC,
  getCountries: getCountriesTC,
};

export default connect(mapStateToProps, dispatchToProps)(AppContainer);
