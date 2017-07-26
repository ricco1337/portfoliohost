import React, { Component } from 'react';
import './resume.css';
import { Link } from 'react-router-dom';


class ResumePage extends Component {
  render() {
    return (
      <div>
      <ul className='navbar-links'>
    <li><Link to='/home' className="link-nav" >Home</Link></li>
      <li><Link to='/resume' className="link-nav" >Resume</Link></li>
        <li><Link to='/portfolio' className="link-nav" >Portfolio</Link></li>
          <li><Link to='/about' className="link-nav" >About</Link></li>
    </ul>

    </div>

    )
  }
}

export default ResumePage;
