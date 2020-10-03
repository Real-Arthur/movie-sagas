import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    state = {

    }
    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
    }

    goToDetails = (value) => {
        console.log('POSTER BUTTON', value);
        console.log('props', this.props);
        this.props.dispatch({
            type: 'FETCH_MOVIES_ID',
            payload: value
        })
        this.props.dispatch({
            type: 'FETCH_GENRES',
            payload: value
        })
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