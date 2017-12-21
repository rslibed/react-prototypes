import React, { Component } from 'react';
import Movie from './movies';
import axios from 'axios';

class MovieContainer extends Component {
    constructor (props) {
        super(props);
        this.state = {
            movies: []
        };
    }
    componentWillMount() {
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then( (response) => {
            console.log("Here is the response: ", response);
            this.setState({
                movies: response.data.feed.entry
            });
        });
    }
    render () {
        const movieArray = this.state.movies.map( (movieInfo, index) => {
           return <Movie info={movieInfo} key={index} />
        });
        return (
            <div>
                {movieArray}
            </div>
        );
    }
}

export default MovieContainer;