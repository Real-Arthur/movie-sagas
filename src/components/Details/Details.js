import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Details extends Component {
    state = {

    }

    render() {
        return(
            <div>
                <p>
                    Details Page
                </p>
            </div>
        )
    }
}


export default connect()(withRouter(Details));