import React, { Component } from 'react';
import YoutubeVideo from './YoutubeVideo.jsx';
import fetchYoutube from '../../lib/youtube.js';

class YoutubeTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: []
    }
  }

  componentDidMount() {
    fetchYoutube(this);
  }

  render() {
    return (
      <div className="Tile">
        <div><h3>Overwatch on Youtube:</h3></div>
        <div className="pre-scrollable">
        {this.state.videos.map((video) => 
        <YoutubeVideo key={video.id.videoId} video={ video }/>
        )}
        </div>
      </div>
    );
  }
}

export default YoutubeTile;