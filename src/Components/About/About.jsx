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
            <p>I'm a final-year student at UC Berkeley, Before pursuing my degree, I proudly served in the U.S. Navy for 7 years, where I developed strong leadership, teamwork, and problem-solving skills.</p>
            <p>Now, I combine those experiences with my passion for data science, machine learning, and web development. I’ve built a solid foundation in Python, R, Pandas, and TensorFlow. I’m excited to apply my skills to real-world problems.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>Python & R</p><hr style={{width:"90%"}}/></div>
            <div className="about-skill"><p>Pandas & NumPy </p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>TensorFlow</p><hr style={{width:"70%"}}/></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>React.JS</p><hr style={{width:"60%"}}/></div>
            <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"60%"}}/></div>
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