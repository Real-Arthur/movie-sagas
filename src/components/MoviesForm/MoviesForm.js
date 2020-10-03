import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MoviesForm extends Component {
    state = {
        title: undefined,
        url: undefined,
        description: undefined,
        genre: undefined
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
            genre: event.target.value
        })
    }

    render() {
        console.log('state', this.state);
        
        return(
            <div>
                <p>Movies Form</p>
                <input type="text" onChange={(event) => this.handleChangeFor(event, 'title')} />
                <input type="text" onChange={(event) => this.handleChangeFor(event, 'url')} />
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
            </div>
        )
    }
}


export default connect()(withRouter(MoviesForm));