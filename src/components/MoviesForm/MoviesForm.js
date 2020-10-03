import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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


export default connect()(withRouter(MoviesForm));