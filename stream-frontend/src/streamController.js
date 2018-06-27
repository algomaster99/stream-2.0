import React from 'react';
import { streamSocket } from './webSocket.js';
import 'font-awesome/css/font-awesome.min.css';

export default class StreamController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      url: "",
    };
  }

  handlePlay = () => {
    this.setState({
      play: !this.state.play,
    }, () => {
        let data = {
          url: this.state.url,
          play: this.state.play,
        }
        streamSocket.send(JSON.stringify(data));
        console.log(data); 
      }); 
    }

  componentDidMount() { 
    streamSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      this.setState({
        play: data['play'],
        url: data['url'],
      });
    console.log(this.state.play);
    }
  }

  render() {
    return (
      <div>
        <i 
         className={this.state.play ? "fa fa-pause-circle" : "fa fa-play-circle"}
         onClick={this.handlePlay}>
        </i>
      </div>
    ); 
  } 
}
