import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
import Nav from './nav';
import OurMacarons from './our_macarons';
import GiftsAndParties from './gifts_parties';
import Contact from './contact';

function App () {
    return(
        <div className="container">
            <Nav/>
            <Route exact path="/" component={Welcome}/>
            <Route path="/our-macarons" component={OurMacarons}/>
            <Route path="/gifts-and-parties" component={GiftsAndParties}/>
            <Route path="/contact" component={Contact}/>
        </div>
    );
}

export default App;
