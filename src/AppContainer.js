import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import App from './App';
import { changeSearchText, getCountries } from './redux/countriesSlice';

const AppContainer = () => {
  const theme = useSelector((state) => state.countries.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);

    dispatch(getCountries());
    dispatch(changeSearchText({ newText: '' }));
    // eslint-disable-next-line
  }, []);

  return <App />;
};

export default AppContainer;
