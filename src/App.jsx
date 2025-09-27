import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar/Navbar'
import MainPage from '../components/MainPage/MainPage'
import Footer from '../components/Footer/Footer'

function App() {


  return (
    <>
      <Navbar className="navbar" />
      <div className="page-content">
        <MainPage />
        <Footer />
      </div>

    </>
  )
}

export default App
