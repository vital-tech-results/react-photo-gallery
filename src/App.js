import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Photo from './components/Photo';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import Search from './components/Search';
import About from './components/About';
import apiKey from './components/config';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Search />
        <Nav />
        {/* <Route path="/about" component={About} /> */}
        <div className="photo-container"></div>
        <Photo />
      </div>
    </BrowserRouter>
  );
}

export default App;
