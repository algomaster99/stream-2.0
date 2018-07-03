import React from 'react';
import moment from 'moment';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import { streamSocket } from './webSocket.js';
import 'font-awesome/css/font-awesome.min.css';
 
export default class StreamController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      play: false,
      mute: false,
      duration: 0,
      seek: 0,
    };
  }

  handlePlay = () => {
    this.setState({
      play: !this.state.play,
    }, () => {
        let data = {
          url: this.state.url,
          play: this.state.play,
          mute: this.state.mute,
          duration: this.state.duration,
          seek: this.state.seek,
        }
        streamSocket.send(JSON.stringify(data));
      });
   console.log("handlePlay") 
    }

  handleMute = () => {
    this.setState({
      mute: !this.state.mute,
    }, () => {
        let data = {
          url: this.state.url,
          mute: this.state.mute,
          play: this.state.play,
          duration: this.state.duration,
          seek: this.state.seek,
        };
        streamSocket.send(JSON.stringify(data));
      });
   console.log("handleMute");
  }

  handleSeek = (value) => {
    this.setState({
      seek: Number(value),  
    }, () => {
        let data = {
          url: this.state.url,
          mute: this.state.mute,
          play: this.state.play,
          duration: this.state.duration,
          seek: this.state.seek,
        };
        streamSocket.send(JSON.stringify(data));
      });
    console.log("handleSeek");
  }

  handleTooltip = () => {
    return parseInt((this.state.seek/this.state.duration)*100).toString()+"%";  
  }

  componentDidMount() { 
    streamSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      this.setState({
        play: data['play'],
        url: data['url'],
        mute: data['mute'],
        duration: data['duration'],
        seek: data['seek'],
      });
    }
    console.log("componentMount streamCon.js");
  }

  render() {
    return (
      <div className="stream-controller">
        <i 
         className={this.state.play ? "fa fa-pause-circle" : "fa fa-play-circle"}
         onClick={this.handlePlay}>
        </i>
        <i
         className={this.state.mute ? "fa fa-volume-off" : "fa fa-volume-up"}
         onClick={this.handleMute}>
        </i><br />
        {/*<input type="range" name="seek" min="0" max={this.state.duration} value={this.state.seek} onChange={this.handleSeek} />*/}
        <Slider
          min={0}
          max={this.state.duration}
          value={this.state.seek}
          onChange={this.handleSeek}
          format={this.handleTooltip}
        />
          <p>{moment("0").seconds(this.state.seek).format('mm:ss')+"/"+moment("0").seconds(this.state.duration).format('mm:ss')}</p>
      </div>
    ); 
  } 
}
