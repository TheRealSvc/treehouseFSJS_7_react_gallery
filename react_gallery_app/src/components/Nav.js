import React, { Component } from 'react'; 
import { Route, Link, Redirect, Router } from 'react-router-dom';
import {useParams } from 'react-router-dom'
import PhotoContainer from './PhotoContainer';
import { withRouter } from "react-router";

// component for standard routes 
class Nav extends Component { 
      
  constructor(props) {
    super(props);
    this.state = { navSearchTopic: '' };
  }

  componentDidMount() {
    console.log("Nav: app did mount");
    }
  

    render() {  
    return(
    <div>
     <nav className="main-nav">
        <ul>
           <li><Link to={`/forest`} onClick={ (e) => { this.props.changeTopicNav("forest") }} > forest </Link> </li>  
           <li><Link to={`/beach`} onClick={ (e) => { this.props.changeTopicNav("beach") }} > beach </Link> </li>  
           <li><Link to={`/waterfall`} onClick={ (e) => { this.props.changeTopicNav("waterfall") }} > waterfall </Link> </li>   
        </ul>       
    </nav> 
    </div>    
    )}
}

export default Nav;
