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
    title: reduxState.movies.title,
    description: reduxState.movies.description,
    poster: reduxState.movies.poster
})

export default connect(mapStateToProps)(withRouter(Details));