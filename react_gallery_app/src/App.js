import './css/index.css';
import Photo from './components/Photo';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
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
    photos: []
  }; 
  this.updateSearchTopic = this.updateSearchTopic.bind(this) ;
}
 
 updateSearchTopic = (searchTopicDownstream) => {
   console.log('in updateSearchTopic before if ');
  // if (this.state.searchTopic !== searchTopicDownstream ) {
    console.log(`in updateSearchTopic after if with searchTopic ${searchTopicDownstream}`);
    console.log(this.state.searchTopic);
  this.setState( 
    {
      searchTopic: searchTopicDownstream,
      prevSearchTopic: this.state.searchTopic
    }, () => {this.createPhotos( searchTopicDownstream );} )  
  //}
}

 // fetch images using fetch api 
 async createPhotos(searchTopic) {
  console.log(`in App / createPhotos`);
  if(this.state.prevSearchTopic !== searchTopic) {
  console.log(`create photo-array called with searchTopic: ${searchTopic}`);
  const url=`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTopic}&per_page=20&format=json&nojsoncallback=1`
  fetch(url)
  .then(response => response.json())
  .then(data => data.photos.photo)
  .then(data => data.map(x => `https://live.staticflickr.com/${x.server}/${x.id}_${x.secret}_w.gif`)) 
  .then(data => this.setState({
    photos: data,
    searchTopic: searchTopic }, () => {console.log(`updated photos in app-state. New: ${this.state.searchTopic} , Old: ${this.state.prevSearchTopic}`)})
  )
  }}

componentDidMount() {
 this.createPhotos(this.state.searchTopic);
}

/*
componentDidUpdate() {
this.setState();
  //if (this.state.searchTopic !== this.state.prevSearchTopic) {  
//console.log("app did change");
//this.createPhotos(this.state.searchTopic);
} 
*/  


// callback to modify state from a prop changed in SearchForm 
render() {
  return (    
    <div className="container">
    <BrowserRouter> 
    <SearchForm changeTopicSearch={this.updateSearchTopic} />
    <Nav changeTopicNav={this.updateSearchTopic} /> 
    <Switch> 
    <Route exact path= "/" component={Init} />
    <Route  exact path="/forest" children={<PhotoContainer searchTopic={"forest"} photos={this.state.photos}/> } />   
    <Route  exact path="/beach"  children={<PhotoContainer searchTopic={"beach"} photos={this.state.photos}/> } />   
    <Route  exact path="/waterfall"  children={<PhotoContainer searchTopic={"waterfall"} photos={this.state.photos}/> } />   
    <Route  path="/:searchTopic" children={<PhotoContainer searchTopic={this.state.searchTopic} photos={this.state.photos}/> } />   
    <Route component={NotFound} />
    </Switch> 
    </BrowserRouter>
   </div>   
);
}
}

export default App;

