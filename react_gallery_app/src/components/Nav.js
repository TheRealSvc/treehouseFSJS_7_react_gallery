import React from 'react'; 
import { Route, Link, Redirect, Router } from 'react-router-dom';
import PhotoContainer from './PhotoContainer';

// component for standard routes 
const Nav = (props) => (  
    <div>
     <nav className="main-nav">
        <ul>
            <li><Link to={`/beach`}  onClick={props.changeSearchTopicNav("beach")}> beach </Link> </li>   
            <li><Link to={`/forest`} onClick={props.changeSearchTopicNav("forest")}> forest </Link> </li> 
            <li><Link to={`/ocean`} onClick={props.changeSearchTopicNav("ocean")}> ocean </Link> </li> 
        </ul>    
     </nav> 
    </div>
);

export default Nav;

//onChange= {() => this.props.changeSearchTopic(this.props.searchTopic)}
