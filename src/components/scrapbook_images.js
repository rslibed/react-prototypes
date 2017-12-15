import React, {Component} from 'react';
import Modal from './modal.js';

class Image extends Component {
    constructor (props) {
        super(props);
        console.log(props);
    }

    render() {
        const {src, style} = this.props.about;
        return (
            <img className="scrapbook-image" src={src} style={style}/>
        );
    }
}

export default Image;