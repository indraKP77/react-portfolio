import React from 'react'
import linkedin from '../../assets/linkedin.png'
import insta from '../../assets/insta.jpg'
import github from '../../assets/github-logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <h2>My Socials</h2>
      <div className="container">
      <div class="card">
  <div class="card2">
  <div className="footer-social">
        <a href="https://www.linkedin.com/in/indra-kumar-pasunooti-197704259/"><img src={linkedin} alt="" /></a>
        </div>
  </div>
</div>
<div class="card">
  <div class="card2">
  <div className="footer-social">
            <a href="https://www.instagram.com/indrakumar5605/?hl=en"><img src={insta} alt="" /></a>
        </div>
  </div>
</div>
<div class="card">
  <div class="card2">
  <div className="footer-social">
            <a href="https://github.com/indraKP77"><img src={github} alt="" /></a>
        </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default Footer
