import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      muted: true,
      label: 'play',
      volume: 50,
    }
    this.handleMusic = this.handleMusic.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleMusic(e) {
    let audio = document.getElementsByTagName('audio')[0];
    if (this.state.muted) {
      audio.play();
      this.setState({
        muted: !this.state.muted,
        label: 'pause',    
      });
    }
    else {
      audio.pause();
      this.setState({
        muted: !this.state.muted,
        label: 'play',
      });
    }  
  }

  handleVolume(e) {
    let audio = document.getElementsByTagName('audio')[0];
    this.setState({
      volume: e.target.value,
    });
    audio.volume = this.state.volume/100;
  }

  logout(e) {
    e.preventDefault();
    localStorage.removeItem("persist:polls");
    window.location.reload();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <audio>
            <source src="http://mp3clan.com/dl.php?type=get&s=26fcbf89a53175651ede754bd6e889cb&u=NnNIMzlrMEJadjlNMHFjT25MRmVOQVhINzdCS1VJVnI3NmRxZFpvYXBoRllnR2tkSnRCeTc4dTVhVXhSZE1MaU9TZVc3ZENWU2NtTGJTSER1RmorUStqUGJtNU5aMXNrTUFJakNKQm0rdnk4Mk5rTEE4clNLTGtsdEVySXNPZXZVNitxM3RaZ3p3QjFycVV5K2g1WXE3dTZRTHJTdGhOVktsYXRiMnMvSjh4TzBCT1RsN1JEaGJFbVlvVHdyWDVSaFlzaDgwTjQ2TGxNNkhMcVJ4QkFWMEgrY0dlVmdWMG9iZ3Y2QVlwUkpNM0Q0c3FxMEpSNEVxVGovYlVYNjRSS05QQmxhaWdoUFJsUVNkUFUwVzhHUmc9PSMjIzQ1OTY4OTc1NzA0MDAjIyMyMTY=&tid=371745457_456510781&source=aHR0cDovLzk1LjIxMS4xNjIuOTgvZ2V0LnBocA==&tt=1&name=Camila_Cabello_-_Crying_In_The_Club" type="audio/mpeg" />
          </audio>
          <input type="button" name="play" value={this.state.label} id="toggle" onClick={this.handleMusic} /><br />
          <input type="range" min="0" max="100" value={this.state.volume} id="volume-slider" onInput={this.handleVolume} />
          <p id="volume">{this.state.volume}</p>
        </div>
        <button onClick={this.logout}>LOGOUT</button>
        <script src="webSocket.js" type="text/javascript"></script>
      </div>
    );
  }
}

export default App;
