import React, { Component } from 'react';
import { connect } from 'react-redux';

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

    render() {
        console.log('HOME REDUX STATE:', this.props.moviesList);
        
        return(
            <div>
                <p>Home Page</p>
                {this.props.moviesList.map((movie) => 
                    <p>{movie.title}</p>
                )}
            </div>
        )
    }
}


const mapStateToProps = (reduxState) => ({
    moviesList: reduxState.movies
});

export default connect(mapStateToProps)(Home);