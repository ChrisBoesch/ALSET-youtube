import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

class ALSET_YouTube extends Component {
  constructor() {
    super();
    this.state={
      playCount : 0,
      pauseCount : 0
    }
    this.handlePause=this.handlePause.bind(this);
    this.handlePlay=this.handlePlay.bind(this);
  }
  handlePlay(event) {
    this.setState({playCount : this.state.playCount+1});
    if(this.props.onPlay){
      this.props.onPlay(event);
    }
  }
  handlePause(event) {
    this.setState({pauseCount : this.state.pauseCount+1});
    if(this.props.onPause){
      this.props.onPause(event);
    }
  }
  
  render() {
    const { videoId, id, className, containerClassName, opts, onReady, onPlay, onPause, onEnd, onError, onStateChange, onPlaybackRateChange,onPlaybackQualityChange } = this.props;
    const { playCount, pauseCount } = this.state;
    return (
      <div className={containerClassName}>
        <YouTube
          videoId={videoId}
          id={id}
          className={className}
          opts={opts}
          onReady={onReady}
          onPlay={(event)=>{this.handlePlay(event)}}
          onPause={(event)=>{this.handlePause(event)}}
          onEnd={onEnd}
          onError={onError}
          onStateChange={onStateChange}
          onPlaybackRateChange={onPlaybackRateChange}
          onPlaybackQualityChange={onPlaybackQualityChange}
        />
        <h4>Play Count : {playCount}</h4>
        <h4>Pause Count : {pauseCount}</h4>
      </div>
    );
  }
}

ALSET_YouTube.propTypes={
  videoId : PropTypes.string.isRequired,
  id : PropTypes.string,
  className : PropTypes.string,
  containerClassName : PropTypes.string,
  opts : PropTypes.object,
  onReady : PropTypes.func,
  onPlay : PropTypes.func,
  onPause : PropTypes.func,
  onEnd : PropTypes.func,
  onError : PropTypes.func,
  onStateChange : PropTypes.func,
  onPlaybackRateChange : PropTypes.func,
  onPlaybackQualityChange : PropTypes.func
}

export default ALSET_YouTube;
