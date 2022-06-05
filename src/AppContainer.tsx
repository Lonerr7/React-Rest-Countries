import { useEffect } from 'react';
import App from './App';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { changeSearchText, getCountries } from './redux/countriesSlice';

const AppContainer: React.FC = () => {
  const theme = useAppSelector((state) => state.theme.theme);
  const dispatch = useAppDispatch();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);

    dispatch(getCountries());
    dispatch(changeSearchText({ newText: '' }));
    // eslint-disable-next-line
  }, []);

  return <App />;
};

export default AppContainer;
