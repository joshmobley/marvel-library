import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import Footer from './footer/footer';
import Character from './character/character';
import CharacterList from './character-list/character-list';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
        <Router>
      <div>
        <Header />
          <Route exact path="/" component={CharacterList} />
          <Route path="/character/:id" component={Character} />
        <Footer />
      </div>
        </Router>
    );
  }
}

export default App;
