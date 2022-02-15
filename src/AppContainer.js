import { useEffect } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { changeThemeTC } from './redux/appReducer';

const AppContainer = (props) => {
  useEffect(() => {
    // changeThemeTC(props.theme);
    document.body.setAttribute('data-theme', props.theme);
  }, [props.theme]);

  return <App />;
};

const mapStateToProps = (state) => ({
  theme: state.app.theme,
});

const dispatchToProps = {
  changeTheme: changeThemeTC,
};

export default connect(mapStateToProps, dispatchToProps)(AppContainer);
