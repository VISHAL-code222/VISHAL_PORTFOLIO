import React, { useState, useEffect } from 'react';
import "./App.css";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Loading from './components/Loading';
import 'animate.css/animate.min.css';


function App() {

 


  const [loading, setLoading] = useState(true);
  // const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer);
  }, []);

  // const handleNavbarLinkClick = () => {
  //   setAnimationKey(prevKey => prevKey + 1); // Update the animation key to trigger animations
  // };

  return (
    <div>
      <Navbar  />
      <Home />
      {loading ? (
        <div className="loading-screen">
          <Loading />
        </div>
      ) : (
        <>
          <Header id="home"   className="animate__animated animate__fadeIn animate__delay-0.8s"       />

          <About id="about"  className="animate__animated animate__fadeIn animate__delay-1s"/>
          <Skills id="skills"   className="animate__animated animate__fadeIn animate__delay-1.5s"/>
          <Projects id="projects"   className="animate__animated animate__fadeIn animate__delay-2s"/>
          <Contact id="contact"  className="animate__animated animate__fadeIn animate__delay-3s"/>
          <Footer id="footer"  className="animate__animated animate__fadeIn animate__delay-4s"/>









        </>
      )}
    </div>
  );
}

export default App;
