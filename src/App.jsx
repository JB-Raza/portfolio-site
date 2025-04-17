import './App.css';
import { BrowserRouter } from 'react-router-dom';

import { Navbar, Hero, Services, WorkPortfolio, Qualification, Skills, Testimonial, Blogs, Contact, Footer } from './components/index.js'
import ScrollToTopIcon from './components/ScrollToTopIcon.jsx'

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar */}
        <Navbar />
        <ScrollToTopIcon />

        {/* Sections */}
        <div id="hero">
          <Hero />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="portfolio">
          <WorkPortfolio />
        </div>

        <div id="resume">
          <Qualification />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="testimonial">
          <Testimonial />
        </div>

          <Blogs />

        <div id="contact">
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App
