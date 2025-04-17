import React, { useRef, useState, useEffect } from 'react'
import { HashLink as Link } from 'react-router-hash-link'

// gsap
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Navbar (){
  const navbarRef = useRef();
  let [collapsed, setCollapsed] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else if (window.scrollY <= 200) {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isScrolled) {
      gsap.fromTo(
        navbarRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "bounce.out",
        }
      );
    }
  }, [isScrolled]);
  
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: yCoordinate - 120});
  };

  return (
    <nav ref={navbarRef} className={`navbar navbar-expand-lg p-0 my-3 px-xl-5 ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-fluid w-100 mx-auto d-flex justify-content-between py-0">
        <a className="navbar-brand py-3" href="#">
          <img src="./logo-primary.webp" alt="logo" className="img-fluid logo w-100" />
        </a>
        <address className="email focus-text my-auto fw-semibold ms-lg-1 ms-xl-2 me-auto text-white d-none d-md-block">
          mail@garolddesign.com
        </address>
        <div className="d-flex nav-item-container m-0 p-0">
          <div className="collapse w-md-100 me-lg-4 ms-auto navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-lg-3 gap-xl-4 mb-2 ms-auto mb-lg-0">
              <li className="nav-item mx-1">
                <Link smooth scroll={scrollWithOffset} to={'#services'}
                  className="nav-link text-white active fw-semibold"
                >Services</Link>
              </li>
              <li className="nav-item mx-1">
              <Link smooth scroll={scrollWithOffset} to={'#portfolio'}
                  className="nav-link text-white active fw-semibold"
                >Works</Link>
              </li>
              <li className="nav-item mx-1">
              <Link smooth scroll={scrollWithOffset} to={'#resume'}
                  className="nav-link text-white active fw-semibold"
                >Resume</Link>
              </li>
              <li className="nav-item mx-1">
              <Link smooth scroll={scrollWithOffset} to={'#skills'}
                  className="nav-link text-white active fw-semibold"
                >Skills</Link>
              </li>
              <li className="nav-item mx-1">
              <Link smooth scroll={scrollWithOffset} to={'#testimonial'}
                  className="nav-link text-white active fw-semibold"
                >Testinomials</Link>
              </li>
              <li className="nav-item mx-1">
              <Link smooth scroll={scrollWithOffset} to={'#contact'}
                  className="nav-link text-white active fw-semibold"
                >Contact</Link>
              </li>
            </ul>

          </div>
          {/* btns */}
          <div className="d-flex align-items-center ms-auto gap-0 gap-sm-1 gap-md-2">
            {/* hire me btn */}
            <button className="btn gradient-btn d-none d-sm-inline rounded-pill border-0 m-0 text-white" type="submit">Hire me!</button>
            {/* toggler btn */}
            {collapsed ?
              <button
                onClick={() => setCollapsed(prev => !prev)}
                className="navbar-toggler border-0 d-flex flex-column gap-2 align-items-end d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button> :
              <button
                onClick={() => setCollapsed(prev => !prev)}
                className="navbar-toggler cross-btn border-0 d-flex flex-column gap-2 align-items-end d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="line-1"></span>
                <span className="line-2"></span>
              </button>

            }

          </div>

        </div>
      </div>
    </nav>
  )
}
