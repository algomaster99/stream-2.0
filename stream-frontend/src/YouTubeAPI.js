import React from 'react';
import axios from 'axios';

var apiKey = 'AIzaSyA2cZVPA4lJRmjSz10R2P8eh4xu-iRIIKU';
var maxResults = 10;

export default class Search extends React.Component {

  handleSearch = (e) => {
    e.preventDefault();
    let searchTerm = document.getElementById('search').value;
    let URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + apiKey + '&maxResults=' + maxResults + "&q=" + searchTerm;

  axios.get(URL)
  .then(function (response) {
    console.log(response);
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
        </form> 
      </div>
    );
  } 
} 
