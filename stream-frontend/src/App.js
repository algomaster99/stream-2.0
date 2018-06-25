import React from 'react';
import './App.css';
import Search from './fetchData.js';

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
        <Search />
        <button onClick={this.logout}>LOGOUT</button>
      </div>
    );
  }
}

export default App;
