import React from 'react';
import {
  Route,
  Routes
} from 'react-router-dom'

// import pages
import {
  ScalesPage,
  PostPage
} from './pages';

// import constans
import { PATH } from './consts';

function App() {
  return (
    <Routes>
      <Route path={PATH.HOME} element={<ScalesPage />} />
      <Route path="/post" element={<PostPage />} />
    </Routes>
  );
}

export default App;
