import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return(
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Jamie Kim,</span> an ML Engineer based in the U.S.</h1>
      <p>I'm graduating from UC Berkeley in Fall 2024 with a major in Statistics. I'm passionate about machine learning and am looking for full-time opportunities as an ML Engineer.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a href="https://docs.google.com/document/d/1LL3-gbS_LZ2A8fq2fA1dnzECFF5Q_5yd/edit?usp=sharing&ouid=110649335848485115709&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link">
              My Resume
            </a>
        </div>
        <div className="hero-linkedin">
          <a href="https://www.linkedin.com/in/jamie-kim-stat"
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin-button">LinkedIn</a>
        </div>
      </div>
    </div>
  )
}

export default Hero