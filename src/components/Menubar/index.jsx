import React, { useState } from 'react'
import './index.css'
import HamburgerIcon from './HamburgerIcon'

function Menubar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  return (
    <div className='menubar'>
      <HamburgerIcon handleOnClick={toggleIsOpen} isOpen={isOpen}/>
      <div className="menubar__card-container">
        <div className="menubar__card">
          <div className={`menubar__card__item menubar__card__item--${isOpen ? 'open': 'close'}`}>
            <a href="">Check out my works</a>
          </div>
          <div className={`menubar__card__item menubar__card__item--${isOpen ? 'open': 'close'}`}>
            <a href="../../assets/KmergeBoimilleyrDosdos-Resume.pdf" download>Download my resume</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menubar