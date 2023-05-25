import React from 'react'
import './index.css'
import Home from '../containers/Home'
import About from '../containers/About'
import NavBar from '../components/Navbar'
import Projects from '../containers/Projects'
import Contact from '../containers/Contact'
import Footer from '../components/Footer'
import Menubar from '../components/Menubar'

function Layout() {
  return (
    <div className='layout'>
      <div className="layout__navbar">
        {/* <NavBar/> */}
      </div>
      <div className="layout__content">
        <Home/>
        <About/>
        {/* <Projects/> */}
        <Contact/>
        <Footer/>
      </div>
      <div className="layout__menubar">
        <Menubar/>
      </div>
    </div>
  )
}

export default Layout