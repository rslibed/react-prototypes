import React, {Component} from 'react';
import Modal from './modal.js';

class Image extends Component {
    constructor (props) {
        super(props);
        this.activateModal = this.activateModal.bind(this);
    }
    activateModal () {
        console.log('Connected');
    }
    render() {
        const {src, style} = this.props.about;
        return (
            <img className="scrapbook-image" src={src} style={style} onClick={this.activateModal}/>
        );
    }
}

export default Image;