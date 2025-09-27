import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../src/assets/logo.png';
import internet_emoji_x from '../../src/assets/internet_emoji_x.jpg';
import sandwich from '../../src/assets/sandwich.jpg';
import search_emoji from '../../src/assets/search_emoji.jpg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav and hide top nav once we pass 150px
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navigation */}
      <div className={`top-nav ${isScrolled ? 'hide' : ''}`}>
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

      {/* Bottom Navigation (always visible, becomes sticky on scroll) */}
      <div className={`nav-bottom ${isScrolled ? 'sticky' : ''}`}>
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

      {/* Content section */}
      <div className={`page-content ${isScrolled ? 'sticky-margin' : ''}`}>
        <p>Lots of scrollable content goes here...</p>
        {/* Add more content to test scrolling */}
        <div style={{ height: '2000px', padding: '20px' }}>
          <h2>Scroll down to see the navigation behavior!</h2>
          <p>Keep scrolling to test the sticky navigation...</p>
          <p>The top navigation will disappear after 150px of scrolling, and the bottom search bar will stick to the top!</p>
          <p>No content will be hidden behind the navigation.</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;