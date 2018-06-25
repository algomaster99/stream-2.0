import React from 'react';
import axios from 'axios';
//import YTSearch from 'youtube-api-search';
import VideoList from './videoList.js';
//import { List } from 'semantic-ui-react';

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
    let searchTerm = document.getElementById('search').value;
    /*YTSearch({key: API_KEY, term: searchTerm}, (videos) => {
      this.setState({
        videos: videos,
      });
    console.log(this.state.videos);
    });*/
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
        <form>
          <input type="text" id="search" />
          <input type="submit" value="Search!" onClick={this.handleSearch} />
          <ul id="results"></ul>
          <VideoList videos={this.state.videos} />
        </form> 
      </div>
    );
  } 
} 
