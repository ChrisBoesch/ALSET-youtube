import React, { Component } from 'react';

import ALSET_YouTube from './modules/ALSET-youtube'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>YouTube Video Player and Feedback</h2>
        <ALSET_YouTube />
      </div>
    );
  }
}

export default App;
