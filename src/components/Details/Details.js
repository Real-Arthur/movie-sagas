import React, { Component } from 'react';
import { connect } from 'react-redux';

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


export default connect()(Details);