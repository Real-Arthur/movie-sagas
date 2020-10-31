import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Grid from '@material-ui/core/Grid'
import { CardContent, Divider, Tooltip, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';


class Home extends Component {
   // Calls getMovies on load
    componentDidMount() {
        this.getMovies();
        this.getGenres();
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
        this.props.history.push(`/details/`)
    }
    // Starts FETCH_ALL_GENRES saga to initiate database GET call for genre list
    getGenres = () => {
        this.props.dispatch({
            type: 'FETCH_ALL_GENRES'
        })
    }

    render() {
        console.log('HOME REDUX STATE:', this.props.currentMovie);
        return(
            <div>
                {/* MOVIES CONTAINER */}
                <Grid container xs={12}>
                {this.props.moviesList.map((movie) =>
                    <Grid key={movie.id} container xs={6} alignItems="flex-end">
                    <Grid item xs={4} container direction="column">
                        <Grid item xs>
                            <Typography variant="h4">
                            {movie.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Tooltip title="See More Details" placement="right">
                        <img onClick={() => this.goToDetails(movie.id)} src={movie.poster} alt={`Poster of ${movie.title}`} />
                            </Tooltip>
                        </Grid>
                        </Grid>

                        <Grid item xs={8}>
                            <Typography variant="body2">
                        {movie.description}
                            </Typography>
                        </Grid>
                    </Grid>
                )}
                </Grid>
                {/* GENRES CONTAINER */}
                <Divider />
                <div>
                <Card>
                    {this.props.genresList.map((genre) =>
                            <Card >
                                <CardContent>
                                    <Typography variant='h4'>
                                        {genre.name}
                                    </Typography>
                                {genre["array_agg"].map((item) =>
                                    <CardContent>{item}</CardContent>
                                )}
                            </CardContent>
                            </Card>
                    )}
                </Card></div>
                </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    moviesList: reduxState.movies,
    genresList: reduxState.genresList
});

export default connect(mapStateToProps)(withRouter(Home));