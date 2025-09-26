import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../src/assets/logo.png';
import internet_emoji_x from '../../src/assets/internet_emoji_x.jpg';
import sandwich from '../../src/assets/sandwich.jpg';
import search_emoji from '../../src/assets/search_emoji.jpg';

const Navbar = () => {
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    // Show once we pass 150px; never hide again
    if (window.scrollY > 150 && !showBottom) {
      setShowBottom(true);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, [showBottom]);


  return (
    <div>
      {/* --- Top section that scrolls away --- */}
      <div className="top-nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <span>
          <div className="homes">Homes</div>
          <div className="experiences">Experiences</div>
          <div className="services">Services</div>
        </span>

        <div className="nav-right">
          Become a host!
          <img src={internet_emoji_x} alt="" className="internet" />
          <img src={sandwich} alt="" className="sandwich" />
        </div>
      </div>

      {/* --- Bottom search bar: only appears after scroll --- */}
      <div
        className={`nav-bottom sticky-nav ${showBottom ? 'show' : ''}`}
      >
        <div className="search-bar">
          <div className="search-items-container">
            <div className="search-item">
              <h2>Where</h2>
              <p>Search destinations</p>
            </div>
            <div className="divider"></div>
            <div className="search-item">
              <h2>When</h2>
              <p>Add dates</p>
            </div>
            <div className="divider"></div>
            <div className="search-item">
              <h2>Who</h2>
              <p>Add guests</p>
            </div>
          </div>
          <div className="search-button">
            <img src={search_emoji} alt="Search" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
