import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import MyWork from './Components/MyWork/MyWork'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork />
      <Contact/>
      <Footer/>
    </div>
  )
  
}

export default App