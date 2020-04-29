import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index';

import GlobalStyles from './style/global';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
