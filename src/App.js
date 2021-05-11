import React, { useState } from 'react';
import { Router } from '@reach/router'
import Search from './components/searchBar'
import Home from './components/home'
import NominationContext from './context';

function App() {
  const count = useState(0)
  return (
    <NominationContext.Provider value={count}>
    <div className="App">
    <Router>
      <Home path="/" />
      <Search path="/nominate" />
    </Router>
    </div>
    </NominationContext.Provider>
  );
}

export default App;
