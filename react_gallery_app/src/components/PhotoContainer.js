import React, { PureComponent } from 'react';
import Photo from './Photo';
import {withRouter} from 'react-router';
import { Route, Link, Redirect, Router } from 'react-router-dom';
import { useHistory } from "react-router-dom";

class PhotoContainer extends PureComponent {    
    
    constructor(props) {
        super(props);
        this.state = {
          searchTopic: 'forest',
          photos: [],
          photoComps: []
        };
      this.createPhotoComps = this.createPhotoComps.bind(this);
      this.redirectToPath = this.redirectToPath.bind(this);
      }
      
      
  redirectToPath = (path) => {
      console.log(path)
      if (path !== this.state.searchTopic) {
      const { history } = this.props;
      console.log(history);
      if(history) history.push(path);
     }}
      

 createPhotoComps(photos) { 
  if (photos[0] !== this.state.photos[0]) { 
  let photoComps = [];
  for (let i=0; i<photos.length-1; i++) {
    console.log(photos[i])
     photoComps.push( <Photo url={photos[i]} key={i} />) ;
  }
  console.log(photoComps);
  this.setState({
    photoComps: photoComps,
    photos: photos}, 
    this.redirectToPath(this.props.searchTopic));
 }}
  

componentDidMount() {
  if (this.props.searchTopic!== this.state.searchTopic) {
  console.log(`Huhuuu_1 ${this.props.searchTopic}`);
  this.createPhotoComps(this.props.photos);
  }
}


componentDidUpdate() {
  console.log('photcomps is hereee')
  if (this.props.photos!== this.state.searchTopic) {
    console.log(`Huhuuu_2 ${this.props.searchTopic}`);
    this.createPhotoComps(this.props.photos);
}
}


render() { 
  const { history } = this.props;
  return ( 

      <div className="photo-container"  >
         <h2> {`${this.props.searchTopic} Gifs`}</h2>    
         <ul>
           { this.state.photoComps } 
         </ul>
         
        </div> 
        )  
  };
}

export default withRouter(PhotoContainer);

