import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom'

// import pages
import {
  ScalesPage,
} from './pages';

// import constans
import { PATH } from './consts';

function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<ScalesPage />} />
    </Routes>
  );
}

export default App;
