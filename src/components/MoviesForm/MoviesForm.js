import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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

    handleChangeFor = (event, propertyName) => {
        console.log('Button for', [propertyName]);
        console.log('Value', event.target.value);
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
    }

    onChange = (event) => {
        console.log('genres', event.target.value)
        this.setState({
            ...this.state,
            genre_id: parseInt(event.target.value)
        })
    }

    saveMovieToDb = () => {
        console.log('save form button works', this.state)
        this.props.dispatch({
            type: 'CREATE_MOVIES',
            payload: this.state
        })
    }

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
                <p>Movies Form</p>
                <input type="text" onChange={(event) => this.handleChangeFor(event, 'title')} />
                <input type="text" onChange={(event) => this.handleChangeFor(event, 'poster')} />
                <textarea type="text" onChange={(event) => this.handleChangeFor(event, 'description')} />
                <select name="genre" onChange={this.onChange} value={this.state.genre}>
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
                    <button onClick={() => this.saveMovieToDb()}>Save</button>
                    <button onClick={() => this.resetAndGoHome()}>Cancel</button>
                </div>
            </div>
        )
    }
}


export default connect()(withRouter(MoviesForm));