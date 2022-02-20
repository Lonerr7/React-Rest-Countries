import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Countries from './components/Countries/Countries';
import CountryContainer from './components/Country/CountryContainer/CountryContainer';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main>
          
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="/countries/*" element={<CountryContainer />} />
          </Routes>
        </Main>
      </BrowserRouter>
    </div>
  );
};

export default App;
