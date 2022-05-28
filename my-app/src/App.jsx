import React from 'react';
import { Route, Routes } from 'react-router-dom'

import AboutMe from './contents/aboutme'

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;