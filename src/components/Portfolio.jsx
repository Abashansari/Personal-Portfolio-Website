import React from 'react'
import Navbar from './Navbar'
import WelcomePage from './WelcomePage'
import Home from './Home'
import About from './About'
import TechnologySkill from './TechnologySkill'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

export default function Portfolio() {
    return (
        <div className='container'>
            <Navbar />
            <WelcomePage />
            <Home />
            <About />
            <TechnologySkill />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}
