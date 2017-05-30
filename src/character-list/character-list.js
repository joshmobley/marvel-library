import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';

class CharacterList extends Component { 

    constructor() {
        super();
        this.getData();
    }

    getData() {
    
    axios.get('http://gateway.marvel.com/v1/public/characters?limit=48&apikey=8a6e2b898fce519cc7271ccb27ddd5ed').then(
      (res) => {
        this.setState({
          characters: res.data.data.results
        });
        console.log( res );
        this.buildList();
      }
    );

    }

    buildList() {

        const characters = this.state.characters.map( (char) => {
          if( char.thumbnail.path != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ) {
            return <li>
              <a href="#" style={{ backgroundImage: 'url(' + char.thumbnail.path + '/landscape_incredible.jpg)' }}>
                <span>{char.name}</span>
              </a>
            </li>
          }else {
            return <li><a href="#"><span>{char.name}</span></a></li>
          }

        });

        ReactDOM.render(
          <ul>{ characters }</ul>,
          document.getElementById('character-list')
        );
    }

    render() {
        return (
            <div id="character-list" />
        );
    }
}

export default CharacterList;