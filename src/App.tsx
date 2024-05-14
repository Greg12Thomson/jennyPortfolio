import React from "react";

import './App.css';

import Footer from "./components/Footer";
import Menu from './components/Menu'
import Header from './components/Header'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="slanted"></div>
      <div className="section">
        <Menu />
      </div>
      <div className="slanted-down"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;