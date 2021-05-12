import React, { PureComponent } from 'react';
import Photo from './Photo';
import {withRouter} from 'react-router';
import { Route, Link, Redirect, Router } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'

class PhotoContainer extends PureComponent {    
    
    constructor(props) {
        super(props);
        this.state = {
          searchTopic: 'nothin',
          photos: [],
          photoComps: []
        };
      this.createPhotoComps = this.createPhotoComps.bind(this);
      }
      
 createPhotoComps(photos) { 
  if (this.props.photos[0] !== this.state.photos[0]) { 
  let photoComps = [];
  for (let i=0; i<photos.length-1; i++) {
    console.log(photos[i])
     photoComps.push( <Photo url={photos[i]} key={i} />) ;
  }
  this.setState({photos: photos, photoComps: photoComps});
 }}
  

componentDidMount() {
 // if (this.props.searchTopic!== this.state.searchTopic) {
  console.log(`Huhuuu_1 ${this.props.searchTopic}`);
  this.createPhotoComps(this.props.photos);
  }
//}

componentDidUpdate() {
  console.log('photcomps is hereee')
  //if (this.props.searchTopic!== this.state.searchTopic) {
    console.log(`PhotoContainer ComponenentDidUpdate. New props search topic: ${this.props.searchTopic}, state search topic ${this.state.searchTopic}`);
    this.createPhotoComps(this.props.photos);
}
//}

render() { 
 // const { history } = this.props;
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

