import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grabble-app">
          <h1>Grabble Test</h1>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
