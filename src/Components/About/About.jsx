import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'


const About = () => {
  return(
    <div id='about' className = 'about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I graduated from UC Berkeley with a degree in Statistics and currently work on the Demand Planning team at Coverland, where I manage inventory data for over 10,000 SKUs across multiple warehouses using Excel and ShipHero WMS.</p>
            <p>Before starting my career in analytics, I served in the U.S. Navy Seabees, gaining experience in operations, vendor coordination, and procurement support. I&apos;m interested in using data to solve business problems, especially in supply chain analytics, demand forecasting, and business intelligence.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Excel</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>Shiphero WMS</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>Data Analysis</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>Python & R</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
          </div>
        </div>
      </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>7+</h1>
            <p>YEARS of MILITARY SERVICE</p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>3+</h1>
            <p>PROJECTS COMPLITED</p>
          </div> 
        </div>
    </div>
  )
}

export default About