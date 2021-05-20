import './css/index.css';
import Photo from './components/Photo';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import InvalidRoute from './components/InvalidRoute';
import Init from './components/Init';
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
    photos: [],
    loading: true
  };
  this.searchHistory = [] ; 
  this.updateSearchTopic = this.updateSearchTopic.bind(this) ;
  this.createPhotoComps = this.createPhotoComps.bind(this) ; 
  this.createPhotos = this.createPhotos.bind(this) ;
}

// function which is passed as prop to child components in order to change the searchTopic and start fetching
 updateSearchTopic = (searchTopicDownstream) => {
   if (this.state.searchTopic !== searchTopicDownstream ) {
  this.setState( 
    {
      searchTopic: searchTopicDownstream,
      prevSearchTopic: this.state.searchTopic
    }, () => { this.createPhotos( searchTopicDownstream ) });  
  }
}

// function to create list elements from the photo array
createPhotoComps(photos) {  
  let photoComps = [];
  for (let i=0; i<photos.length-1; i++) {
     photoComps.push( <Photo url={photos[i]} key={i} />) ;
  }
  if (photoComps.length>0) { 
    return(photoComps) 
   } else { return(['noRes']) } ; 
 }

 // fetch images using fetch api. Generates li of photos and saves to state  
 createPhotos(searchTopic2) {
  if(this.state.prevSearchTopic !== searchTopic2) {
  this.setState({ loading: true })
  const url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTopic2}&per_page=24&format=json&nojsoncallback=1`
  fetch(url)
  .then(response => response.json())
  .then(data => data.photos.photo)
  .then(data => data.map(x => `https://live.staticflickr.com/${x.server}/${x.id}_${x.secret}_w.gif`)) 
  .then(data => this.createPhotoComps(data))
  .then(data => this.setState({
    photoComps: data,
    searchTopic: searchTopic2 ,
    prevSearchTopic: searchTopic2,
    loading: false }, 
      () => { console.log(`App: createPhotos setState with new searchTopic: ${this.state.searchTopic}`); } ))
   .catch(error => {
    console.log('Error in createPhotos in App.js', error);
  });   
  }}

    
componentDidMount() {
    console.log(`App: componentDidMount, with searchTopic (state):  ${this.state.searchTopic}`) 
    this.createPhotos(this.state.searchTopic) ;
  } 
 

// Routing 
render() {
  return (    
    <div className="container">
    {
      (this.state.loading)
       ? <p> Loading...</p>
       :
      <BrowserRouter> 
      <SearchForm createPhotos={this.createPhotos} /> 
      <Nav createPhotos={this.createPhotos} /> 
        <Switch> 
          <Route exact path= "/" component={Init} />  
          <Route exact path="/forest" render={ () => <PhotoContainer createPhotos={this.createPhotos} searchTopic={"forest"} photoComps={this.state.photoComps}/> } /> 
          <Route exact path="/beach" render={  () => <PhotoContainer createPhotos={this.createPhotos} searchTopic={"beach"} photoComps={this.state.photoComps}/> } />
          <Route exact path="/waterfall" render={ () => <PhotoContainer createPhotos={this.createPhotos} searchTopic={"waterfall"} photoComps={this.state.photoComps}/> } />
          <Route path="/search/:searchTopic" render={ () => <PhotoContainer createPhotos={this.createPhotos} searchTopic={this.state.searchTopic} photoComps={this.state.photoComps} /> } /> 
          <Route component={InvalidRoute} />
          </Switch> 
      </BrowserRouter> }
   </div>   
);
}
}

export default App;
