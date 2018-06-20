import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './YouTubeAPI.js';

class App extends React.Component {
  constructor(props){
    super(props);
      this.logout = this.logout.bind(this);
  }

  async componentDidMount () {
      await import('./webSocket.js');
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
          <Search />
        </div>
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}

export default App;
