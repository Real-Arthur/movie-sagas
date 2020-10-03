import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
   // Calls getMovies on load
    componentDidMount() {
        this.getMovies();
    }
    // Starts FETCH_MOVIES saga to initiate database GET call for movie list
    getMovies = () => {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }
    // Starts two details sagas to initiate database GET call for specific movie details
    // then sends user to movie details page
    goToDetails = (value) => {
        console.log('POSTER BUTTON', value);
        console.log('props', this.props);
        // Gets movie details
        this.props.dispatch({
            type: 'FETCH_MOVIES_ID',
            payload: value
        })
        // Gets specific movie's genres
        this.props.dispatch({
            type: 'FETCH_GENRES',
            payload: value
        })
        // Kicks user to details page
        this.props.history.push('/details')
    }

    render() {
        console.log('HOME REDUX STATE:', this.props.moviesList);
        
        return(
            <div>
                <p>Home Page</p>
                <ul>
                {this.props.moviesList.map((movie) => 
                    <li key={movie.id}>
                        {movie.title}
                        <img onClick={() => this.goToDetails(movie.id)} src={movie.poster} alt={`Poster of ${movie.title}`} />
                        {movie.description}
                    </li>
                )}</ul>
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({
    moviesList: reduxState.movies
});

export default connect(mapStateToProps)(withRouter(Home));