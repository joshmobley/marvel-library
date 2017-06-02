import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render () {
        return (
            <header>
                <a href="/">
                    <span>Marvel Comics</span> Character Library</a>
            </header>
        );
    }
}

export default Header;