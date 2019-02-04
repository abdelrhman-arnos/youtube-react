import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import Filter from './components/filter';
import ListRenderer from './components/list-renderer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <div className="container">
              <Filter />
              <ListRenderer />
          </div>
      </div>
    );
  }
}

export default App;
