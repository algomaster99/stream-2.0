import React from 'react';
import 'normalize.css';
import './styles/App.css';
import Header from './header.js';
import Search from './fetchData.js';
import StreamController from './streamController.js';
import { Sidebar, Menu, Icon, Segment } from 'semantic-ui-react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }; 
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

  handleButtonClick = () => this.setState({ visible: !this.state.visible })

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    return (
      <div className="outer-container">
        <div className="sidebar">
          <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={this.state.visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={this.state.visible}>
              <main className="page-wrap">
          <Header onClick={this.handleButtonClick}/>
          <Search />
          <StreamController />
          <button onClick={this.logout}>Logout</button>
        </main>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
       {/* <main className="page-wrap">
          <Header onClick={this.handleButtonClick}/>
          <Search />
          <StreamController />
          <button onClick={this.logout}>Logout</button>
        </main>*/}
      </div>
    );
  }
}

export default App;
