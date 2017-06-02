import React, { Component } from 'react';
import './filter.css';

class Filter extends Component {

    render() {
        return (
            <div className="filter">
                <label for="search">Search</label>
                <input name="search" type="text" />
            </div>
        );
    }

}

export default Filter;