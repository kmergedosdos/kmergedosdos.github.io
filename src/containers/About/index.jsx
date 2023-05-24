import React from 'react'
import './index.css'
import profilePhoto from '../../assets/kmerge_id.jpg'
import TECHS from './techs.json'
import TechTile from '../../components/TechTile'

function About() {
  return (
    <section className='about'>
      <h2 className="about__header">
        A little bit about me
      </h2>
      <div className="about__content">
        <div className="about__content__text">
          <p className="about__content__text__body">
            My name is Kmerge and I love creating valuable software with good UX designs. I have 1+ years of professional experience mostly involving front end development. I also have 4+ years of background writing code in several programming languages.
          </p>
          <p className="about__content__text__body">
            I recently earned my bachelor's degree in computer science. Currently, I've been focusing on developing more stuffs on the internet and exploring more technologies to become a rock-hard full stack developer.
          </p>
          <p className="about__content__text__body">
            Some of the technologies I've used include but not limited to the following:
          </p>
          <div className="about__content__text__skills">
            {
              TECHS.map(tech => (
                <TechTile title={tech}/>
              ))
            }
          </div>
        </div>
        <div className="about__content__image">
          <img src={profilePhoto} alt="Profile" />
        </div>
      </div>
    </section>
  )
}

export default About