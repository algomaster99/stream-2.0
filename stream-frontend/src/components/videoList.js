import React from 'react';
import '../styles/videoList.css';
import VideoDetail from './videoDetail.js';

export default class VideoList extends React.Component {
  
  render() {
    return (
      <div className="videos-container">
        {this.props.videos.map(video => (
          <VideoDetail video={video} />
        ))}
      </div>
    );
  }

}
