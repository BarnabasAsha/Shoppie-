import React from 'react';
import Search from './components/searchBar'
import Header from './components/header'
import Procedure from './components/procedures'

function App() {
  return (
    <div className="App">
      <Header />
      <Procedure />
      <Search />
    </div>
  );
}

export default App;
