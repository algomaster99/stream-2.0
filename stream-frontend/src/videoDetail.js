import React from 'react';
import { streamSocket } from './webSocket.js';
import './styles/videoDetail.css';
import { Card, Image, Button, Icon, Reveal} from 'semantic-ui-react';

export default class VideoDetail extends React.Component {

  handleClick = () => {
      let data = {
        url: this.props.video.id.videoId,
        play: false,
        mute: false,
        duration: 0,
        seek: 0,
    }
    streamSocket.send(JSON.stringify(data));
    console.log("click video");
  }

  render() {
    /*return (
      <div className="searchResult" id={this.props.video.id.videoId} onClick={this.handleClick}>
        <img src={this.props.video.snippet.thumbnails.medium.url} alt="thumbnail"/>
        <div className="content">
          <h5>{this.props.video.snippet.title}</h5>
          <p>{this.props.video.snippet.description}</p> 
        </div>
      </div>
    );*/
    return (
      <Card id={this.props.video.id.videoId} className="video-card">
        <Image src={this.props.video.snippet.thumbnails.medium.url} alt="thumbnail" />
        <Card.Content>
          <Card.Header>{this.props.video.snippet.title}</Card.Header>
          <Card.Description>{this.props.video.snippet.channelTitle}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button.Group widths="2">
              <Button icon labelPosition="left" onClick={this.handleClick}>
                <Icon name="play" />
                Play
              </Button>
              <Button.Or />
              <Button icon labelPosition="right">
                Queue
                <Icon name="plus" />
              </Button> 
            </Button.Group>
          </div>
        </Card.Content>
      </Card>
    );
  }   
}

