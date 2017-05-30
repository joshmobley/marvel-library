import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <p>Data provided by <a href="http://marvel.com" target="_blank">Marvel</a>. © 2014 Marvel</p>
            </div>
        );
    }
}

export default Footer;