import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
       <div className="header">
          <div className="title">
              <h1>EduCenter</h1>
          </div>
      <div className="navbar">
      <Nav>
          <Link className="nav" to="/home">Home</Link>
          <Link className="nav" to="/about">About</Link>
          <Link className="nav" to="/service">Service</Link>
          <Link className="nav" to="/contact">Contact</Link>
         
        </Nav>
      </div>
      </div>
    );
};

export default Header;