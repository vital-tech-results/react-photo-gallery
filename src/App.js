import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import apiKey from './components/config';
import PhotoList from './components/PhotoList';
import Photo from './components/Photo';


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
    };
  }

  componentWillMount() {
    this.performSearch();
  }
  performSearch = (query) => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          photos: responseData.photos.photo,
        });
      })
      .catch(error => {
        console.log('There was an error fetching and parsing data', error);
      });
  }

  rainbows() { this.performSearch('rainbows') };

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav />
          <Switch>
            {/* <Route exact path="/rainbows" render={this.rainbows} /> */}
            {/* <Route path="/moutains" render={this.performSearch('mountains')} /> */}
            {/* <Route path="/beaches" render={this.performSearch('beaches')} /> */}
            {/* <Route path="/about" component={About} /> */}
          </Switch>
          <PhotoList photos={this.state.photos} />
        </div>
      </BrowserRouter>
    );
  }
}

