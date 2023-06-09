import React from 'react'
import './index.css'

function Home() {
  return (
    <section className='home' id='home'>
      <code>Hello, world! My name is</code>
      <h1 className='home__header'>Kmerge Dosdos.</h1>
      <h4 className='home__subheader'>I design solutions, build software, solve problems, and constantly explore new things.</h4>
      <a href="#contact" style={{width: 'fit-content'}}>
        <button className="btn">Let's connect</button>
      </a>
    </section>
  )
}

export default Home