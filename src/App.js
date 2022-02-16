import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Controls from './components/Controls/Controls';
import Countries from './components/Countries/Countries';

import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main>
          <Controls />
          <Countries />
        </Main>
      </BrowserRouter>
    </div>
  );
};

export default App;
