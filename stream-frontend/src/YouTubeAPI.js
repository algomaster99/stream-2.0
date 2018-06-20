import React from 'react';
import $ from 'jquery';

var apiKey = 'AIzaSyA2cZVPA4lJRmjSz10R2P8eh4xu-iRIIKU';
var maxResults = 10;

export default class Search extends React.Component {

  handleSearch = (e) => {
    e.preventDefault();
    let searchTerm = $('#search').val();
    let URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + apiKey + '&maxResults=' + maxResults + "&q=" + searchTerm;

    $.ajax({
      type: "GET",
      url: URL,
      async: false,
      dataType: "json",
      success: function(data){
        console.log(data);
      }
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
