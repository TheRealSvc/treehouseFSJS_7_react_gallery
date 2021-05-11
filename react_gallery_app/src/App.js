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
constructor(props) {
  super(props);
  this.state = {
    searchTopic: 'forest',
    prevSearchTopic: '',
    photos: []
  }; 
}
  
 updateSearchTopic = (searchTopicDownstream) => {
   if (this.state.searchTopic !== searchTopicDownstream ) {
  this.setState( 
    {
      searchTopic: searchTopicDownstream,
      prevSearchTopic: this.state.searchTopic
    }, () => {this.createPhotoComps(this.state.searchTopic);} )  // () => {return console.log(`state updated in app component originating from Nav ${this.state.searchTopic} ${this.state.prevSearchTopic}`)})
  }
}


 // fetch images using fetch api 
async createPhotoComps(searchTopic) {
  console.log(`hia`);
  if(this.state.prevSearchTopic !== searchTopic) {
  console.log(`create photo-array called with searchTopic: ${searchTopic}`);
  const url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTopic}&per_page=20&format=json&nojsoncallback=1`
  fetch(url)
  .then(response => response.json())
  .then(data => data.photos.photo)
  .then(data => data.map(x => `https://live.staticflickr.com/${x.server}/${x.id}_${x.secret}_w.gif`)) 
  .then(data => this.setState({
    photos: data,
    searchTopic: searchTopic}, () => {console.log(`updated photos in app-state ${this.state.searchTopic} ${this.state.prevSearchTopic}`)})
  ) //.catch(console.log("404")) ;  
  }}


componentDidMount() {
  console.log("app did mount");
  this.createPhotoComps("forest");
  console.log(apiKey);
  }

componentShouldChange() {
  console.log("app should change");
  //this.createPhotoComps("forest");
  }
  

componentDidChange() {
console.log("app did change");
}
    
componentWillUnmount() {
  console.log("app will unmount");
}

// callback to modify state from a prop changed in SearchForm 
render() {
  return (    
    <div className="container">
    <BrowserRouter>  
    <SearchForm changeTopicSearch={this.updateSearchTopic} />
    <Nav changeTopicNav={this.updateSearchTopic} /> 

    <Switch> 
    <Route  path="/:searchTopic" children={<PhotoContainer searchTopic={this.state.searchTopic} photos={this.state.photos}/> } />   
    <Route component={NotFound} />
    </Switch> 
    </BrowserRouter>
   </div>   
);
}
}

export default App;

