import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Details extends Component {
    componentDidMount() {
        // this.getGenres();
    }
    state = {

    }

    getGenres = () => {
        this.props.dispatch({
            type: 'FETCH_GENRES',
            payload: this.props.currentMovieId
        })
    }

    refreshList = () => {
        console.log('refersh button');  
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
        this.props.history.push('/')
    }

    backToList = () => {
        console.log('back button');
        this.props.history.push('/')
    }

    render() {
        console.log('Details Redux:', this.props.genres)
        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.poster} alt={this.props.title} />
                <ul>
                    {this.props.genres.map((genre, i) =>
                        <li key={i}>{genre.name}</li>
                        )}
                </ul>
                <p>
                    {this.props.description}
                </p>
                <button onClick={() => this.refreshList()}>Back To List</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    title: reduxState.currentMovie.title,
    description: reduxState.currentMovie.description,
    poster: reduxState.currentMovie.poster,
    genres: reduxState.genres
})

export default connect(mapStateToProps)(withRouter(Details));