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
        title: undefined,
        description: undefined,
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
                <p>Edit Page</p>
                <input type="text" onChange={(event) => this.handleChangeFor(event, 'title')} />
                <textarea type="text" onChange={(event) => this.handleChangeFor(event, 'description')} />
                
                <div>
                    <button onClick={() => this.saveMovieToDb()}>Save</button>
                    <button onClick={() => this.resetAndGoHome()}>Cancel</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapStateToProps)(withRouter(Edit));