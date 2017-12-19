import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';

function App () {
    return(
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={OurMacarons}/>
        </div>
    );
}

export default App;
