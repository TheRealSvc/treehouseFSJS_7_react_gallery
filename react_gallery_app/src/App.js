import './css/index.css';
import Photo from './components/Photo';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
import apiKey from './config';


import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';


class App extends Component  {

//initialize with defaults
state = {
    prevSearchTopic: '',
    searchTopic: 'default',
    photos: [
    {
      url: 'https://live.staticflickr.com/65535/51156408855_78b6a67c91_w.jpg',
      id: 0  
    },
    {
      url: 'https://live.staticflickr.com/65535/51156408855_78b6a67c91_w.jpg',
      id: 1  
    }
  ]
  }; 

 // fetch images using fetch api 
 updateSearchTopic = (searchTopicDownstream) => {
   if (searchTopicDownstream === this.state.prevSearchTopic) {
     return } 
  // ToDo replace api key by prop
  let url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=bb7980f0ad50ca47d1b83d0f338862b3&text=${searchTopicDownstream}&per_page=20&format=json&nojsoncallback=1`
  fetch(url)
  .then(response => response.json())
  .then(data => data.photos.photo)
  .then(data => data.map(x => `https://live.staticflickr.com/${x.server}/${x.id}_${x.secret}_w.jpg`)) 
  .then(data => this.setState( prevState => {
    return {
      photos: data, 
      searchTopic: searchTopicDownstream,
      prevSearchTopic: searchTopicDownstream
    } 
  }))
console.log(`in app.js: ${this.state.photos}`); 
}

//https://live.staticflickr.com/{server-id}/{id}_{secret}_{size-suffix}.jpg

// callback to modify state from a prop changed in SearchForm 
render() {
  return (
  <BrowserRouter> 
    <div className="container">
      <SearchForm changeSearchTopic={this.updateSearchTopic} /> 
      <Nav changeSearchTopicNav={this.updateSearchTopic} /> 
      <Switch>
        <Route exact path="/:searchTopic" render={ () => <PhotoContainer photos={this.state.photos} /> } />   
        <Route component={NotFound} />
        
      </Switch>
    </div>
  </BrowserRouter>
);
}
}

export default App;
