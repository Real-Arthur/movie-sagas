import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';

// CONST //
const initialState = {
    title: undefined,
    url: undefined,
    description: undefined,
    genre: undefined
}

class MoviesForm extends Component {
    state = {
        title: undefined,
        poster: undefined,
        description: undefined,
        genre_id: undefined
    }
    // Handles setting the local state
    handleChangeFor = (event, propertyName) => {
        console.log('Button for', [propertyName]);
        console.log('Value', event.target.value);
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
    }
    // Handles setting the genre state
    onChangeGenre = (event) => {
        console.log('genres', event.target.value)
        this.setState({
            ...this.state,
            genre_id: parseInt(event.target.value)
        })
    }
    // Handles send full state to CREATE_MOVIES saga
    saveMovieToDb = () => {
        console.log('save form button works', this.state)
        this.props.dispatch({
            type: 'CREATE_MOVIES',
            payload: this.state
        })
        // kicks user back to home page
        this.props.history.push('/')
    }
    // Resets state to const initial and sends user to landing page
    resetAndGoHome = () => {
        this.setState(
        // reverts state back to default
        initialState
        )
        // kicks user back to home page
        this.props.history.push('/')
    }

    render() {
        console.log('state', this.state);
        
        return(
            <div>
                <Typography variant="h2">Add A Movie</Typography>
                <TextField variant="outlined" label="Title" type="text" onChange={(event) => this.handleChangeFor(event, 'title')} />
                <TextField variant="outlined" label="Poster link" type="text" onChange={(event) => this.handleChangeFor(event, 'poster')} />
                <TextField multiline fullWidth variant="outlined" label="outlined" type="text" onChange={(event) => this.handleChangeFor(event, 'description')} />
                <select name="genre" onChange={this.onChangeGenre} value={this.state.genre}>
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select>
                <div>
                    <Button variant="contained" color="primary" onClick={() => this.saveMovieToDb()}>Save</Button>
                    <Button variant="outlined" color="primary" onClick={() => this.resetAndGoHome()}>Cancel</Button>
                </div>
            </div>
        )
    }
}


export default connect()(withRouter(MoviesForm));