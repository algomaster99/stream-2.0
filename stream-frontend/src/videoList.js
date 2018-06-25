import React from 'react';
//import { Card } from 'semantic-ui-react';
import VideoDetail from './videoDetail.js';

export default class VideoList extends React.Component {
  
  render() {
    return (
      <div className="searchResultList">
        {this.props.videos.map(video => (
          <VideoDetail video={video} />
        ))}
      </div>
    );
  }

}
