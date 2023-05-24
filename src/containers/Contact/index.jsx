import React from 'react'
import './index.css'

function Contact() {
  return (
    <section className="contact">
      <h2 className="contact__header">
        Let's connect
      </h2>
      <p className="contact__body">
        Got an exciting project you want to discuss about, or just want to say Hello? Shoot me an email at <a href='mailto: kpdosdos@gmail.com' style={{textDecoration: 'underline'}}>kpdosdos@gmail.com</a>.
        <br />
        <br />
        <br />
        or instantly 
      </p>
      <button className="btn">drop me a message.</button>
    </section>
  )
}

export default Contact