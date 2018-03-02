import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

import Response from './components/response';
import VideoStats from './components/videoStats';

class ALSET_YouTube extends Component {
  constructor() {
    super();
    this.state = {
      playCount: 0,
      pauseCount: 0,
      videoComplete: false,
    };
    this.onPause = this.onPause.bind(this);
    this.onPlay = this.onPlay.bind(this);
    this.resetStats = this.resetStats.bind(this);
  }
  onPlay(event) {
    this.setState({ playCount: this.state.playCount + 1 });
    if (this.props.onPlay) {
      this.props.onPlay(event);
    }
  }
  onPause(event) {
    this.setState({ pauseCount: this.state.pauseCount + 1 });
    if (this.props.onPause) {
      this.props.onPause(event);
    }
  }
  onEnd(event) {
    this.setState({ videoComplete: true });
    if (this.props.onEnd) {
      this.props.onEnd(event);
    }
  }
  resetStats() {
    this.setState({
      playCount: 0,
      pauseCount: 0,
      videoComplete: false,
    });
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.videoId !== nextProps.videoId) {
      this.resetStats();
    }
  }
  render() {
    const { playCount, pauseCount, videoComplete } = this.state;
    const { containerClassName, questions, submitResponse } = this.props;
    const youtubePanel = (
      <YouTube
        videoId={this.props.videoId}
        id={this.props.id}
        className={this.props.className}
        opts={this.props.opts}
        onReady={this.props.onReady}
        onError={this.props.onError}
        onStateChange={this.props.onStateChange}
        onPlaybackRateChange={this.props.onPlaybackRateChange}
        onPlaybackQualityChange={this.props.onPlaybackQualityChange}
        onPlay={event => this.onPlay(event)}
        onPause={event => this.onPause(event)}
        onEnd={event => this.onEnd(event)}
      />
    );

    const videoStatsPanel = <VideoStats className="" playCount={playCount} pauseCount={pauseCount} />;

    const responsePanel = <Response questions={questions} onSubmit={answer => submitResponse(answer)} />;

    return (
      <div className={containerClassName}>
        {youtubePanel}
        {videoStatsPanel}
        {videoComplete && responsePanel}
      </div>
    );
  }
}

ALSET_YouTube.propTypes = {
  videoId: PropTypes.string.isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  opts: PropTypes.objectOf,
  onReady: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onError: PropTypes.func,
  onStateChange: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onPlaybackQualityChange: PropTypes.func,
};

export default ALSET_YouTube;
