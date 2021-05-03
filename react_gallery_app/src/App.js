import './css/index.css';
import Photo from './components/Photo';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
import apiKey from './config';


import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';


const App = () => (

  <BrowserRouter> 
    <div className="container">
      <SearchForm />
      <Nav /> 
      <Switch>
        <Route exact path="/" component={PhotoContainer} />
        <Route exact path="/:searchTopic" component={PhotoContainer} />  
        <Route component={NotFound} />
        
      </Switch>
    </div>
  </BrowserRouter>
);

/*

</ul>
</div>

<Route exact path={match.path} render={ () => <Redirect to={`${match.path}/html`} /> } />
<Route path={`${match.path}/html`} component={HTML} />
<Route path={`${match.path}/css`} component={CSS} />
<Route path={`${match.path}/javascript`} component={JavaScript} />
</div>
); 

*/

export default App;
