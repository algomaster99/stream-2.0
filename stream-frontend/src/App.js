import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      url: '',
    }
      this.handleSearchQuery = this.handleSearchQuery.bind(this);
      this.logout = this.logout.bind(this);
  }

  async componentDidMount () {
      const { default: WebSocket } = await import('./webSocket.js')
    } 

  handleSearchQuery(e){
    this.setState({
      url: e.target.value,
    });
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
          <input type="text" id="search" value={this.state.url} onInput={this.handleSearchQuery} />
        <p>{this.state.url}</p>
        </div>
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}

export default App;
