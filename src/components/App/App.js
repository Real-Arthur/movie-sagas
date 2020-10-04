import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import Home from '../Home/Home';
import Details from '../Details/Details';
import MoviesForm from '../MoviesForm/MoviesForm';


class App extends Component {
  // Renders the entire app on the DOM
  
  render() {
    return (
      <div className="App">
        <h1>Movies!</h1>
        <Router>
          <Link to="/"><Button color="link" variant="contained" style={{textDecoration: 'none'}}>Home</Button></Link>
          <Link to="/movieForm"><Button color="link" variant="contained" style={{textDecoration: 'none'}}>Add A Movie</Button></Link>
          
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/movieForm">
            <MoviesForm />
          </Route>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
