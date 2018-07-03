import React from 'react';
import './styles/header.css';
import logo from './media/viberr.png'

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
       <i className="fa fa-bars"></i> 
        <div>
          <img src={logo} alt="Logo" />    
          <span>Viberr</span> 
        </div>
      </div>
    );
  }
}
