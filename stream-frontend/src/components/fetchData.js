import React from 'react';
import axios from 'axios';
import { Input, Container } from 'semantic-ui-react';
import VideoList from './videoList.js';
import '../styles/fetchData.css';

const API_KEY = 'AIzaSyA2cZVPA4lJRmjSz10R2P8eh4xu-iRIIKU';
const MAX_RESULTS = 10;

export default class Search extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
    }
  }

  handleSearch = (e) => {
    e.preventDefault();
    let searchTerm = document.getElementById('search-bar').value;
    axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        key: API_KEY,
        q: searchTerm,
        maxResults: MAX_RESULTS,
      }
    })
    .then((response) => {
      this.setState({
        videos: response.data.items,
      });
    })
    .catch(function (error) {
      console.log(error);
    });	
  }  

  render() {
    return (
      <div>
          <Container textAlign="center" className="search">
            <Input id="search-bar" action={{icon:'search', color: 'primary', onClick: this.handleSearch}}  placeholder="Search for good vibes!" size="large" />
          </Container>
        <VideoList videos={this.state.videos} />
      </div>
    );
  } 
} 
