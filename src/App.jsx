import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import WelcomePage from './components/WelcomePage'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <WelcomePage />
      <Home />
      <About />
    </>
  )
}

export default App
