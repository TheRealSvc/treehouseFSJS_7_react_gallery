import React, { Component } from 'react';
import Photo from './Photo';

class PhotoContainer extends Component {    

  createPhotoComps =() => {
    let photoComps=[];

     for (let i=0;i<4;i++) {
       photoComps.push(
       <Photo   key={i} /> );
     }
     return photoComps ; 
    };

  render() {
    return (
        <div className="photo-container">
         <h2>Results</h2>    
         <ul>
          {this.createPhotoComps()}
         </ul>
        </div > 
        )
    }
}

export default PhotoContainer;
