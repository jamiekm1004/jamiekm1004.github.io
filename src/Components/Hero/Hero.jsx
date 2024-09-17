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
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero