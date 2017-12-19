import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
    return(
        <ul className="nav nav-tabs mt-3">
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    Welcome
                </Link>
            </li>
        </ul>
    );
}

export default Nav;