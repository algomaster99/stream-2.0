import React from 'react';
import { streamSocket } from './webSocket.js';
import 'font-awesome/css/font-awesome.min.css';

export default class StreamController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      playIcon: "fa fa-play-circle",
    };
  // this.connection = new WebSocket('ws://127.0.0.1:8000/ws/stream/');
  }

  handleClick = () => {
    this.setState({
      play: !this.state.play,
      playIcon: this.state.playIcon == "fa fa-play-circle" ? "fa fa-pause-circle" : "fa fa-play-circle",
    });
    let data = {
      play: this.state.play,
    }
    streamSocket.send(JSON.stringify(data));
  }

  componentWillMount() { 
    streamSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      this.setState({
        play: data['play'],
      });
    }
  }

  render() {
    return (
      <div>
        <i className={this.state.playIcon} onClick={this.handleClick}></i>
      </div>
    ); 
  }  

}
