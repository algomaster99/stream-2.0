import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      image: "",
      username: "",
    };
  }
  
  componentDidMount() {
    const obj = localStorage.getItem('persist:polls');
    const id = JSON.parse(JSON.parse(obj).auth).access.user_id;
    axios({
      method: 'get',
      url: '/stream/users/' + id + '/',
      responseType: 'stream'
    })
      .then((response) => {
        this.setState({
          first: response.data.first_name,
          last: response.data.last_name,
          username: response.data.username,
        });        
      });
    }

  render() {
    return (
      <div>
        {this.state.first} {this.state.last}
      </div>
    );
  }
} 
