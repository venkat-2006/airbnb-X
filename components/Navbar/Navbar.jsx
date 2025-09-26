import React from 'react'
import './Navbar.css'
import logo from '../../src/assets/logo.png'
import internet_emoji_x from '../../src/assets/internet_emoji_x.jpg'
import sandwich from '../../src/assets/sandwich.jpg'


const Navbar = () => {
  return (
    <div>
        <div className="top-nav">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            
           
            <span>
                
                 
                <div className='homes'>Homes</div>
                <div  className='experiences'>Experiences</div>
                <div className='services'> Services</div>
            </span>
            <div className="nav-right">
              Become a host!
              <img src={internet_emoji_x} alt="" className='internet' />
              <img src={sandwich} alt="" className='sandwich' />

            </div>
        </div>

      
    </div>
  )
}

export default Navbar
