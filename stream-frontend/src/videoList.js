import React from 'react';
import { Card } from 'semantic-ui-react';
import './styles/videoList.css';
import VideoDetail from './videoDetail.js';

export default class VideoList extends React.Component {
  
  render() {
    return (
      <Card.Group className="videos-container">
        {this.props.videos.map(video => (
          <VideoDetail video={video} />
        ))}
      </Card.Group>
    );
  }

}
