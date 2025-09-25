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
      <Navbar/>
      <MainPage/>
      <Footer/>
    </>
  )
}

export default App
