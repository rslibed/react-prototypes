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
        console.log(this.state);
        return (
            <div>
                <h2>Movie Container</h2>
                <Movie/>
            </div>
        );
    }
}

export default MovieContainer;