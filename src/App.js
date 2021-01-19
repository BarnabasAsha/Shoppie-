import React from 'react';
import { Router } from '@reach/router'
import Search from './components/searchBar'
import Home from './components/home'

function App() {
  return (
    <div className="App">
    <Router>
      <Home path="/" />
      <Search path="/nominate" />
    </Router>
    </div>
  );
}

export default App;
