import React, { useState } from 'react'
import './index.css'

function HamburgerIcon({ isOpen, handleOnClick }) {

  return (
    <div className='hamburger' onClick={handleOnClick}>
      <div className={`hamburger__top hamburger__top--${isOpen ? 'open': 'close'}`}></div>
      <div className={`hamburger__mid hamburger__mid--${isOpen ? 'open': 'close'}`}></div>
      <div className={`hamburger__bot hamburger__bot--${isOpen ? 'open': 'close'}`}></div>
    </div>
  )
}

export default HamburgerIcon