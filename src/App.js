import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import apiKey from './components/config';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';
import About from './components/About'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentWillMount() {
    this.performSearch();
  }
  performSearch = (query = 'big island') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          photos: responseData.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('There was an error fetching and parsing data', error);
      });
  }


  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav onClick={this.performSearch} />
          <Switch>
            <Route exact path="/" render={() => (this.state.loading)
              ? <h3>LOADING...</h3>
              : <PhotoList photos={this.state.photos} />} />

            <Route exact path="/about" component={About} />
            <Route exact component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

