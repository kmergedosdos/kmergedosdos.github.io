import React, { useEffect } from 'react'
import './index.css'

import siteLogo from '../../assets/site-logo.svg'
import iconLinkedIn from '../../assets/icon-linkedin.svg'
import iconGitHub from '../../assets/icon-github.svg'
import iconCodePen from '../../assets/icon-codepen.svg'

function Navbar() {

  useEffect(() => {
    const sections = [...document.querySelectorAll('.layout__content > section')];
    const navItemLinks = [...document.querySelectorAll('.navbar__nav__item__link')];
    const indicator = document.querySelector('.navbar__nav__item-indicator');
    
    const handleWindowScroll = () => {
      const pageOffsetTop = window.scrollY;
      const screenHeight = window.innerHeight;

      sections.forEach((sec, i) => {
        const sectionOffsetTop = sec.offsetTop;
        const sectionHeight = sec.clientHeight;

        // update nav indicator position
        if (pageOffsetTop >= sectionOffsetTop && pageOffsetTop < sectionOffsetTop + sectionHeight) {
          const top = ((pageOffsetTop / sectionHeight) * 4); //change 4 to height of navbar__nav__item
          indicator.style.top = `${top > 12 ? 12 : top}em`;
        }
        
        // update active nav item link
        if (pageOffsetTop >= sectionOffsetTop - screenHeight/2 && pageOffsetTop < sectionOffsetTop + sectionHeight - screenHeight/2) {
          const activeSectionId = sec.getAttribute('id');
          navItemLinks.forEach(link => {
            link.classList.remove('active');
            if (link.hash.includes(activeSectionId)) link.classList.add('active');
          });
          // const activeLink = navItemLinks.find(item => item.hash === `#${activeSectionId}`);
          // activeLink.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
    }
  }, []);

  return (
    <div className='navbar'>
      <a href={`${window.location.origin}`} className="navbar__logo">
        <img src={siteLogo} alt="" />
      </a>
      <nav className="navbar__nav">
        <ul className="navbar__nav__list">
          <li className="navbar__nav__item">
            <a href="#home" className="navbar__nav__item__link active">home</a>
          </li>
          <li className="navbar__nav__item">
            <a href="#about" className="navbar__nav__item__link">about</a>
          </li>
          <li className="navbar__nav__item">
            <a href="#work" className="navbar__nav__item__link">work</a>
          </li>
          <li className="navbar__nav__item">
            <a href="#contact" className="navbar__nav__item__link">contact</a>
          </li>
          <li className="navbar__nav__item-indicator">
            <div className="navbar__nav__item-indicator__icon"></div>
          </li>
        </ul>
      </nav>
      <div className="navbar__social-links">
        <a href="https://www.linkedin.com/in/kmergeboi" target='_blank' rel="noreferrer" className="social-links__item"><img src={iconLinkedIn} alt="Linkedin" /></a>
        <a href="https://github.com/kmergedosdos" target='_blank' rel="noreferrer" className="social-links__item"><img src={iconGitHub} alt="GitHub" /></a>
        <a href="https://codepen.io/kmerge_boi" target='_blank' rel="noreferrer" className="social-links__item"><img src={iconCodePen} alt="CodePen" /></a>
      </div>
    </div>
  )
}

export default Navbar