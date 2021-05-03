import React from 'react'; 
import { Route, Link, Redirect } from 'react-router-dom';
import PhotoContainer from './PhotoContainer';

// component for standard routes 
const Nav = () => (
    <div>
    <nav className="main-nav">
    <ul>
        <li><Link to={`/beach`}>beach</Link></li>   
        <li><Link to={`/forest`}>forest</Link></li>
        <li><Link to={`/ocean`}>ocean</Link></li>
    </ul>
  </nav> 
      render={ () => <PhotoContainer /> } />
</div>
);

export default Nav;
