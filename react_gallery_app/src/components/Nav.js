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
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("Nav: app did mount");
    console.log(this.state);
    }
  
  componentShouldChange() {
    console.log("Nav: app should change");
    }
    
  
  componentDidChange() {
  console.log("Nav:  app did change");
  }

    render() {  
    return(
    <div>
     <nav className="main-nav">
        <ul>
           <li><Link to={`/forest`} onClick={ (e) => { this.props.changeTopicNav("forest") }} > forest </Link> </li>  
           <li><Link to={`/beach`} onClick={ (e) => { this.props.changeTopicNav("beach") }} > beach </Link> </li>  
           <li><Link to={`/ocean`} onClick={ (e) => { this.props.changeTopicNav("ocean") }} > ocean </Link> </li>   
        </ul>       
    </nav> 
    </div>    
    )}
}

export default Nav;

// <li><Link to={`/beach`} onClick={  (e) => {this.handleChange(e,"beach") }} > beach </Link> </li>   
// <li><Link to={`/ocean`} onClick={ (e) => { this.handleChange(e,"ocean") }}> ocean </Link> </li>   