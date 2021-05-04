import React, { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {    
    
    constructor(props) {
        super(props);
        console.log(`in photocontainer: ${props}`);
      }
    
    createPhotoComps = (photos) => {
        console.log(`in createPhotoComps Anfang:${photos}`);
        let photoComps = [] ;
         for (let i=0; i<photos.length-1; i++) {
           photoComps.push(
           <Photo url={photos[i]}  key={i} /> );
         }
         return photoComps ; 
        };

  render() {
    return (
        <div className="photo-container">
         <h2>Results</h2>    
         <ul>
          {this.createPhotoComps(this.props.photos)}
         </ul>
        </div > 
        )
    }
}

export default PhotoContainer;
