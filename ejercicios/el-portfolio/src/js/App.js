import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../css/App.css';
import Header from './header.js';
import Intro from './intro.js';
import Skills from './skills.js';
import Education from'./education.js';
import Repositories from './repositories.js';



class App extends Component {
  render() {
    return (
      <div>
        <Header/>

        <Intro/>
        <Skills/>
        <Education/>
        <Repositories/>
      </div>
    );
  }
}

export default App;
