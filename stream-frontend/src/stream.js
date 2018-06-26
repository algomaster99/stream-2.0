import React from 'react';
import ReactPlayer from 'react-player';
import { streamSocket } from './webSocket.js';

const URL = "http://www.youtube.com/watch?v=";

export default class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      play: false,
    };
  }

  componentDidMount() {
    streamSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      this.setState({
        url: data['url'],
        play: data['play'],
      });
    }
  }
 
  onPlay = () => {
    let data = {
      play: true,
    };
    streamSocket.send(JSON.stringify(data));
  }

  onPause = () => {
    let data = {
      play: false,
    };
    streamSocket.send(JSON.stringify(data));
  }
  
  render() {
    return(
    <ReactPlayer
      url={URL+this.state.url}
      playing={this.state.play}
      onPlay={this.handlePlay}
      onPause={this.handlePause}
    />
    );
  }
}
