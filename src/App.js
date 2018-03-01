import React, { Component } from 'react';

import ALSET_YouTube from './modules/ALSET-youtube'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={

    }
    this.handleReady=this.handleReady.bind(this);
    this.handlePlay= this.handlePlay.bind(this);
    this.handlePause= this.handlePause.bind(this);
    this.handleEnd=this.handleEnd.bind(this);
    this.handleError= this.handleError.bind(this);
    this.handleStateChange=this.handleStateChange.bind(this);
    this.handlePlaybackRateChange= this.handlePlaybackRateChange.bind(this);
    this.handlePlaybackQualityChange= this.handlePlaybackQualityChange.bind(this);
  }

  handleReady(event) {
    console.log('handleReady');
    console.log(event);
  }
  handlePlay(event) {
    console.log('handlePlay');
    console.log(event);
  }
  handlePause(event) {
    console.log('handlePause');
    console.log(event);
  }
  handleEnd(event) {
    console.log('handleEnd');
    console.log(event);
  }
  handleError(event) {
    console.log('handleError');
    console.log(event);
  }
  handleStateChange(event) {
    console.log('handleStateChange');
    console.log(event);
  }
  handlePlaybackRateChange(event) {
    console.log('handlePlaybackRateChange');
    console.log(event);
  }
  handlePlaybackQualityChange(event) {
    console.log('handlePlaybackQualityChange');
    console.log(event);    
  }
  render() {
    const opts = {
      height: "600",
      width: "1200",
      playerVars: {
        autoplay: 0
      }
    };
    const videoId= 'zIwLWfaAg-8';
    return (
      <div className="App">
        <h2>YouTube Video Player and Feedback</h2>
        <ALSET_YouTube
          videoId={videoId}
          id={'0'}
          className={''}
          opts={opts}
          onReady={(event)=>{this.handleReady(event)}}
          onPlay={(event)=>{this.handlePlay(event)}}
          onPause={(event)=>{this.handlePause(event)}}
          onEnd={(event)=>{this.handleEnd(event)}}
          onError={(event)=>{this.handleError(event)}}
          onStateChange={(event)=>{this.handleStateChange(event)}}
          onPlaybackRateChange={(event)=>{this.handlePlaybackRateChange(event)}}
          onPlaybackQualityChaevent={(event)=>{this.handlePlaybackQualityChange(event)}}
        />
      </div>
    );
  }
}

export default App;
