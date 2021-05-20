import React, { Component } from 'react';
import Photo from './Photo';
import {withRouter} from 'react-router';
import { Route, Link, Redirect, Router } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import NotFound from './NotFound';

class PhotoContainer extends Component {    
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

    constructor(props) {
        super(props);
        this.state = {
          searchTopic: 'nothin',
          photoComps: []
        };
      }

// if path and searchTopic (state) differ, photos are fetched again to match the path  
  componentDidUpdate() {
    const { match, location, history } = this.props ;
  
    let newSearchTopic =  location.pathname.replace(/^\/[\w\d]+\//, ''); // removes the "search/" part 
    //console.log(`1 ${location.pathname}`);
    if( (this.state.searchTopic !== newSearchTopic)) {
      //console.log(`2 ${newSearchTopic}`);
      this.setState({searchTopic: newSearchTopic });
      this.props.createPhotos(newSearchTopic) ;
}}


render() { 
  
  return ( 

      <div className="photo-container"  >
         <h2> {`${this.props.searchTopic} Gifs`}</h2>    
         <ul>
           { 
              !!this.props.photoComps || this.props.length>0 ? 
              this.props.photoComps :
              <NotFound />
          } 
         </ul>
        </div> 
        )  
  };
}

export default withRouter(PhotoContainer);

