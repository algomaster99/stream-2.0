import React from 'react';
import 'normalize.css';
import './styles/App.css';
import Header from './header.js';
import Search from './fetchData.js';
import StreamController from './streamController.js';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

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

  handleButtonClick = (e) => {
    this.setState({ visible: !this.state.visible });
    const page = document.querySelector('.page-wrap');
    page.style.transform = "rotateY(-5deg) translateX(75px)";
    page.style.transition = "transform 0.5s";
  }

  handleSidebarHide = () => {
    this.setState({ visible: false });
    const page = document.querySelector('.page-wrap');
    page.style.transform = "";
    page.style.transition = "transform 0.5s";
  }

  render() {
    return (
      <div className="outer-container">
        <div>
          <Sidebar.Pushable>
            <Sidebar id="sidebar"
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted 
              onHide={this.handleSidebarHide}
              vertical
              visible={this.state.visible}
              width='thin'
            >
            <Menu.Item as='a' id="current">
              <Icon name='music'/>
               
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='user' />
              Profile
            </Menu.Item>
            <Menu.Item onClick={this.logout} id="logout">
              <Icon name="power off" />
              Logout
            </Menu.Item>
            <Menu.Item as='a' onClick={this.handleSidebarHide} id="close">
              <Icon name="delete" />
              Close
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={this.state.visible}>
            <div className="magic-wrap">
            <main className="page-wrap">
              <Header onClick={this.handleButtonClick}/>
              <Search />
              <StreamController />
            </main>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </div>
      </div>
    );
  }
}

export default App;
