import React from 'react';
import ReactPlayer from 'react-player';
import { streamSocket } from './webSocket.js';

const URL = "https://www.youtube.com/watch?v=";

export default class Stream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      play: true,
    };
  }

  componentWillMount() {
    streamSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      this.setState({
        url: data['url'],
      });
    }
  }
  
  render() {
    return(
    <ReactPlayer
      url={URL+this.state.url}
      playing={this.state.play}
    />
    );
  }
}
