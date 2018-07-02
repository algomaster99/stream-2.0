import React from 'react';
import 'normalize.css';
import './styles/App.css';
import { scaleRotate as Menu } from 'react-burger-menu';
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
      <div id="outer-container">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"}>
          <button>Works</button>
        </Menu>
        <main id="page-wrap">
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
