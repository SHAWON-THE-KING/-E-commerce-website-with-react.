import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner'
import Inspiration from './Components/Inspiration-Collection/Inspiration'
import Beautify from './Components/Beautify-Your-Space/Beautify'
import Browse from './Components/Browse-The-Range/Browse'
import Mailing from './Components/Mailing-List/Mailing'
import Footer from './Components/Footer/Footer'

function App() {
 

  return (
    <>
      <Banner/>
      <Inspiration/>
      <Beautify/>
      <Browse/>
      <Mailing/>
    </>
  )
}

export default App
