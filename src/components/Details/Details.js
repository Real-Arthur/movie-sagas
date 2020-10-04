import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


class Details extends Component {
    // Sends user back to landing page
    refreshList = () => {
        console.log('refresh button works');
        this.props.history.push('/')
    }

    toEditPage = () => {
        console.log('To edit page works');
        this.props.history.push('/edit')
    }

    render() {
        console.log('Details Redux:', this.props.genres)
        return(
            <div>
            <h1>{this.props.title}</h1>
            <Card style={{maxWidth: '50%', margin: 'auto'}}>
                <CardContent>
                <CardMedia style={{display: 'inline-block'}}>
                <img src={this.props.poster} alt={this.props.title} />
                </CardMedia>
                <CardContent style={{display: 'inline-block'}}>
                    {/* renders full list of genres from reduxState */}
                    {this.props.genres.map((genre, i) =>
                        <Typography key={i} paragraph>{genre.name}</Typography>
                        )}
                </CardContent>
                </CardContent>
                <CardMedia>
                    {this.props.description}
                </CardMedia>
                <Button variant="contained" color='primary' onClick={() => this.refreshList()}>Back To Movie List</Button>
                <Button variant="outlined" color="secondary" onClick={()=> this.toEditPage()}>Edit</Button>
            </Card></div>
        )
    }
}

const mapStateToProps = reduxState => ({
    title: reduxState.currentMovie.title,
    description: reduxState.currentMovie.description,
    poster: reduxState.currentMovie.poster,
    genres: reduxState.genres
})

export default connect(mapStateToProps)(withRouter(Details));