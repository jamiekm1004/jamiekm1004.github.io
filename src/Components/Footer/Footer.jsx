import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>Exploring Data, AI, and Web Development</p>
        </div>
        <div className="footer-top-right">  
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">@ 2025 Jamie Kim. All rights reserved</p>
        <div className="footer-bottom-right">
        </div>
      </div>
    </div>
  )
}

export default Footer