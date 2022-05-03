import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import App from './App';

const AppContainer = () => {
  const theme = useSelector((state) => state.countries.theme);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    // eslint-disable-next-line
  }, []);

  return <App />;
};

export default AppContainer;
