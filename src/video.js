import React, { Component } from 'react';

import ALSET_YouTube from './modules/ALSET-youtube';

class Video extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleReady = this.handleReady.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.handleError = this.handleError.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.handlePlaybackRateChange = this.handlePlaybackRateChange.bind(this);
    this.handlePlaybackQualityChange = this.handlePlaybackQualityChange.bind(this);
    this.handleResponseSubmit = this.handleResponseSubmit.bind(this);
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
  handleResponseSubmit(answer) {
    console.log(answer);
  }
  render() {
    const { videoId } = this.props;
    const opts = {
      height: '400',
      width: '800',
      playerVars: {
        autoplay: 0,
      },
    };
    const questions = [
      {
        id: 1,
        text: 'What question do you have after watching this video?',
      },
      {
        id: 2,
        text: 'What is a question someone who watched this video should be able to answer?',
      },
      {
        id: 3,
        text: 'What topics were covered in this video?',
      },
    ];
    return (
      <ALSET_YouTube
        videoId={videoId}
        id={'0'}
        className={''}
        opts={opts}
        questions={questions}
        onReady={event => this.handleReady(event)}
        onPlay={event => this.handlePlay(event)}
        onPause={event => this.handlePause(event)}
        onEnd={event => this.handleEnd(event)}
        onError={event => this.handleError(event)}
        onStateChange={event => this.handleStateChange(event)}
        onPlaybackRateChange={event => this.handlePlaybackRateChange(event)}
        onPlaybackQualityChaevent={event => this.handlePlaybackQualityChange(event)}
        submitResponse={answer => this.handleResponseSubmit(answer)}
      />
    );
  }
}

export default Video;
