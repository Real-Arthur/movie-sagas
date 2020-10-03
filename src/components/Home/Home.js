import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    state = {

    }

    render() {
        return(
            <div>
                <p>Home Page</p>
            </div>
        )
    }
}


export default connect()(Home);