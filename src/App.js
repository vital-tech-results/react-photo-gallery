import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// import components
import Nav from './components/Nav';
import Search from './components/Search';
import apiKey from './components/config';
import PhotoList from './components/PhotoList';
import NotFound from './components/NotFound';
import About from './components/About';

export default class App extends Component {
  // super constructor to store state
  constructor() {
    super();
    this.state = {
      photos: [],
      query: '',
      loading: true
    };
  }
  // on component mount run this function *named UNSAFE according to error on console
  UNSAFE_componentWillMount() {
    this.performSearch();
  }
  // perform the root API call and store response in state constructor above
  performSearch = (query = 'big island') => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({
          photos: responseData.photos.photo,
          query: query,
          loading: false
        });
      })
      .catch(error => {
        console.log('There was an error fetching and parsing data', error);
      });
  }
  //react must have a render method; inside render is the return method
  render() {
    return (
      <BrowserRouter basename="/react-photo-gallery">
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav onClick={this.performSearch} />

          <Switch> {/* use switch to ensure "not found" route is not shown on every page*/}
            <Route path="/" render={() => (this.state.loading)
              ? <h3>LOADING...</h3>
              : <PhotoList photos={this.state.photos} query={this.state.query} />} />  {/*use this ternary operator to show the loading notification */}
            <Route path="/rainbows" component={NotFound} />
            <Route path="/mountains" />
            <Route path="/beaches" />
            {/* <Route path="/about" component={About} /> */}
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
