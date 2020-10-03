import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Details extends Component {
    state = {

    }

    refreshList = () => {
        console.log('refersh button');  
        this.props.dispatch({
            type: 'FETCH_MOVIES'
        })
        this.props.history.push('/')
    }

    backToList = () => {
        console.log('back button');
        this.props.history.push('/')
    }

    render() {
        console.log('Details Redux:', this.props)
        return(
            <div>
                <h1>{this.props.title}</h1>
                <img src={this.props.poster} alt={this.props.title} />
                <p>
                    {this.props.description}
                </p>
                <button onClick={() => this.refreshList()}>Back To List</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    title: reduxState.currentMovie.title,
    description: reduxState.currentMovie.description,
    poster: reduxState.currentMovie.poster
})

export default connect(mapStateToProps)(withRouter(Details));