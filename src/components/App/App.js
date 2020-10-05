import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Home from '../Home/Home';
import Details from '../Details/Details';
import MoviesForm from '../MoviesForm/MoviesForm';
import Edit from '../Edit/Edit';


class App extends Component {
  // Renders the entire app on the DOM
  
  render() {
    return (
      <div className="App">
        <Router>
          <Link to="/"><Button color="primary" variant="outlined" style={{textDecoration: 'none'}}>Home</Button></Link>
          <Link to="/movieForm"><Button color="primary" variant="contained" style={{textDecoration: 'none'}}>Add A Movie</Button></Link>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/movieForm">
            <MoviesForm />
          </Route>
          <Route path="/edit">
            <Edit />
          </Route>
        </Router>
      </div>
    );
  }
}

export default connect()(App);
