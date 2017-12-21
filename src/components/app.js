import React from 'react';
import MoviesContainer from './movies-container';

export default () => {
    return(
        <div className="container">
            <h1 className="text-center">Axios Demo</h1>
            <MoviesContainer/>
        </div>
    );
}