import React from 'react';
import MovieContainer from './movies-container';

export default () => {
    return(
        <div className="container">
            <h1 className="text-center">Axios Demo</h1>
            <MovieContainer/>
        </div>
    );
}