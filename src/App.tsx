import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Countries from './components/Countries/Countries';
import CountryContainer from './components/Country/CountryContainer/CountryContainer';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Main>
          <Routes>
            <Route path="/React-Rest-Countries/" element={<Countries />} />
            <Route
              path="/React-Rest-Countries/countries/*"
              element={<CountryContainer />}
            />
          </Routes>
        </Main>
      </Router>
    </div>
  );
};

export default App;
