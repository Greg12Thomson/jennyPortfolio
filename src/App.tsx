import React from "react";

import Menu from './components/Menu'
import Header from './components/Header'

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div className="slanted"></div>
      <div className="section">
        <Menu />
      </div>
    </div>
  );
}

export default App;