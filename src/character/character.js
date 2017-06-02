import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './character.css';

class Character extends Component {

    constructor(props) {
        super(props);
        this.getData(this.props.match.params.id);
    }

    getData( id ) {
        axios.get('http://gateway.marvel.com/v1/public/characters/' + id + '?&apikey=8a6e2b898fce519cc7271ccb27ddd5ed').then(
          (res) => {
            console.log(res.data.data.results);
            this.setState({
              character: res.data.data.results
            });
            this.buildProfile();
          },
          (err) => {
            console.log(err);
          }
        );
    }

    buildProfile() {
        const character = this.state.character.map( (char) => {
            return (
                <div>
                    <img src={ char.thumbnail.path + '/portrait_incredible.' + char.thumbnail.extension} />
                    <div className="content">
                        <h1>{ char.name }</h1>
                        <p>{ char.description }</p>
                    </div>
                </div>
            );
        });

        ReactDOM.render(
          <div>{ character }</div>,
          document.getElementById('character')
        );
    }

    render() {
        return (
            <div className="character">
                <a href="/" className="back-link">&larr; Back to Directory</a>
                <div id="character" />
            </div>
        );
    }
}

export default Character;