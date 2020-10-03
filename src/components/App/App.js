import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
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
          <div>
          <Link to="/">Home</Link>
          </div>
          <div>
          <Link to="/movieForm">Add A Movie</Link>
          </div>
          {/* ADD PAGES! */}
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
