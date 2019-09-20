import React from 'react';
import logo from './logo.svg';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Shehryar's Kitchen</h1>
        <SearchBar />
        <BusinessList />
      </div>
    )
  };
};

export default App;
