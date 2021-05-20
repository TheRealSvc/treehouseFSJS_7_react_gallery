import React, { Component } from 'react'; 
import {Link } from 'react-router-dom';

// component for 3 standard routes. By calling this.props.createPhotos the photographs are fetched again. 
class Nav extends Component { 
 
  constructor(props) {
    super(props);
  }

    render() {  
    return(
      <div>
      <nav className="main-nav">
         <ul>
            <li><Link to={`/forest`} onClick={ (e) => { this.props.createPhotos("forest") }} > forest </Link> </li>  
            <li><Link to={`/beach`} onClick={ (e) => { this.props.createPhotos("beach") }} > beach </Link> </li>  
            <li><Link to={`/waterfall`} onClick={ (e) => { this.props.createPhotos("waterfall") }} > waterfall </Link> </li>   
         </ul>       
     </nav> 
     </div>   
    )}
}

export default Nav;
