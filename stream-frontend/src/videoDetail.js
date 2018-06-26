import React from 'react';
import { streamSocket } from './webSocket.js';

export default class VideoDetail extends React.Component {

  handleClick = () => {
      let data = {
      url: this.props.video.id.videoId,
    }
    streamSocket.send(JSON.stringify(data));
  }

  render() {
    return (
      <div className="searchResult" id={this.props.video.id.videoId} onClick={this.handleClick}>
        <img src={this.props.video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        <div className="content">
          <h5>{this.props.video.snippet.title}</h5>
          <p>{this.props.video.snippet.description}</p> 
        </div>
      </div>
    );
  }   
}

