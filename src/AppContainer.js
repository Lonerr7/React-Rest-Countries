import { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { changeThemeTC, getCountriesTC } from './redux/appReducer';

const AppContainer = (props) => {
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      document.body.setAttribute('data-theme', props.theme);
      localStorage.setItem('theme', props.theme);
    } else {
      props.changeTheme(localStorage.getItem('theme'));
    }

    props.getCountries();
    // eslint-disable-next-line
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
