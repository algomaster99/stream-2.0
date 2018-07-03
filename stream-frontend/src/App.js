import React from 'react';
import 'normalize.css';
//import { scaleRotate as Menu } from 'react-burger-menu';
import './styles/App.css';
import Header from './header.js';
import Search from './fetchData.js';
import StreamController from './streamController.js';

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
      <div className="outer-container">
        <div className="sidebar">
          
        </div>
        <main className="page-wrap">
          <Header />
          <Search />
          <StreamController />
          <button onClick={this.logout}>Logout</button>
        </main>
      </div>
    );
  }
}

export default App;
