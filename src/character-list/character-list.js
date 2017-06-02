import React, { Component } from 'react';
import Filter from './filter/filter';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './character-list.css';

class CharacterList extends Component { 

    characters = [];
    offset = 0;

    constructor() {
        super();
        this.getData(this.offset);
    }

    getData(offset) {
      
      axios.get('http://gateway.marvel.com/v1/public/characters?limit=100&offset=' + offset +'&apikey=8a6e2b898fce519cc7271ccb27ddd5ed')
        .then(
          (res) => {
            res.data.data.results.forEach( (item) => {
              this.characters.push(item);
            });
            this.buildList();
            this.offset = this.offset + 100;
          }
        );

    }

    buildList() {

        const characters = this.characters.map( (char) => {
          
          if ( char.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ) {
            return <li>
              <a href={ '/character/' + char.id } style={{ backgroundImage: 'url(' + char.thumbnail.path + '/standard_fantastic.' + char.thumbnail.extension + ')' }}>
                <span>{char.name}</span>
              </a>
            </li>
          }

        });

        ReactDOM.render(
          <div>
            <ul>{ characters }</ul>
            <button onClick={ () => { this.getData(this.offset) }}>Load More</button>
          </div>,
          document.getElementById('character-list')
        );
    }

    render() {
        return (
          <div>
            <Filter />
            <div id="character-list" />
          </div>
        );
    }
}

export default CharacterList;