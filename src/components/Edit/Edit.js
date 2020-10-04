import { TextField } from '@material-ui/core';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// CONST //
const initialState = {
    title: undefined,
    description: undefined
}




class Edit extends Component {
    state = {
        title: this.props.title,
        description: this.props.description,
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
        console.log('state', this.state)
        console.log('title props', this.props.title);
        console.log('description props', this.props.description);
        
        return(
            <div>
                <p>Edit Movie Details</p>
                <div>
                    <TextField 
                    type="text" placeholder={this.props.title} value={this.state.title} 
                    onChange={(event) => this.handleChangeFor(event, 'title')} 
                    />
                </div>
                <div>
                    <TextField multiline fullWidth variant="outlined" 
                    type="text" placeholder={this.props.description} value={this.state.description} 
                    onChange={(event) => this.handleChangeFor(event, 'description')} 
                    />
                </div>
                <div>
                    <button onClick={() => this.saveMovieToDb()}>Save</button>
                    <button onClick={() => this.resetAndGoHome()}>Cancel</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    title: reduxState.currentMovie.title,
    description: reduxState.currentMovie.description
});

export default connect(mapStateToProps)(withRouter(Edit));