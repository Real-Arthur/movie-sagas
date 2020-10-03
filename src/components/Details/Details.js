import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Details extends Component {
    // Sends user back to landing page
    refreshList = () => {
        console.log('refresh button works');
        this.props.history.push('/')
    }

    render() {
        console.log('Details Redux:', this.props.genres)
        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.poster} alt={this.props.title} />
                <ul>
                    {/* renders full list of genres from reduxState */}
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