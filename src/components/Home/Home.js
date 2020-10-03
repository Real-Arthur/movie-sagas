import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    state = {

    }
    componentDidMount() {
        this.getMovies();
    }

    getMovies = () => {
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
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