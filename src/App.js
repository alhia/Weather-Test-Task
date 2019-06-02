import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SearchBar from './components/SearchBar';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Weather />
      <SearchBar />
    </div>
  );
}

export default App;
