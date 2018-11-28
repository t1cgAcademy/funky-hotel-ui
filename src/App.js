import React, { Component } from 'react';
import Hotel from './components/Hotel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Funky Hotel</h1>
        <Hotel />
      </div>
    );
  }
}

export default App;
