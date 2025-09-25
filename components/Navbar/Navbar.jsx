import React from 'react'
import './Navbar.css'
import logo from '../../src/assets/logo.png'

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
        </div>

      
    </div>
  )
}

export default Navbar
