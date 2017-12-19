import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';

function App () {
    return(
        <div className="container">
            <h1>React Router Prototype</h1>
            <Route path="/" component={Welcome}/>
        </div>
    );
}

export default App;
