import React, { Component } from 'react';
import { connect } from 'react-redux';

class MoviesForm extends Component {
    state = {

    }

    render() {
        return(
            <div>
                <p>Movies Form</p>
            </div>
        )
    }
}


export default connect()(MoviesForm);