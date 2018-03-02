import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VideoStats extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { className, playCount, pauseCount } = this.props;

    return (
      <div className={className}>
        <h4>Play Count : {playCount}</h4>
        <h4>Pause Count : {pauseCount}</h4>
      </div>
    );
  }
}

VideoStats.propTypes = {
  className: PropTypes.string,
  playCount: PropTypes.number,
  pauseCount: PropTypes.number,
};

export default VideoStats;
