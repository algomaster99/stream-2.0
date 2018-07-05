import React from 'react';
import moment from 'moment';
import { streamSocket } from './webSocket.js';
import { Segment, Icon } from 'semantic-ui-react';
import './styles/streamController.css';
 
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

  handleSeek = (e) => {
    this.setState({
      seek: e.target.value,
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

  componentDidMount() { 
    streamSocket.onmessage = (e) => {
      let data = JSON.parse(e.data);
      this.setState({
        play: data['play'],
        url: data['url'],
        mute: data['mute'],
        duration: data['duration'],
        seek: data['seek'],
      }, () => {
          if (!this.state.duration) {
      document.querySelector('.slider').style.background = "linear-gradient(90deg, #ffd626 0%, #919191 0%)"
      console.log('inital');
    }
    else {
      let percentage = (this.state.seek/this.state.duration)*100
      document.querySelector('.slider').style.background = "linear-gradient(90deg, #ffd626 "+percentage+"%, #919191 0%)"
    console.log('change');
    }
         });
    }
    console.log("componentMount streamCon.js");
  }

  render() {
    return (
      <div id="wrap">
      <Segment inverted id="stream-controller">
        <Icon name={this.state.play ? 'pause' : 'play'} onClick={this.handlePlay} />
        <Icon
         name={this.state.mute ? "volume off" : "volume up"}
         onClick={this.handleMute}>
        </Icon>
        <div className="slider-container">
        <input type="range" name="seek" min="0" max={this.state.duration} value={this.state.seek} onChange={this.handleSeek} className='slider' />
        </div>
        <p>{moment("0").seconds(this.state.seek).format('mm:ss')+"/"+moment("0").seconds(this.state.duration).format('mm:ss')}</p>
      </Segment>
      </div>
    ); 
  } 
}
