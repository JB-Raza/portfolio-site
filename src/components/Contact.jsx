import React, {useState, useRef, useEffect} from 'react'
import { MainHeading } from './elementComp.js'

import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {

  const [isSelectOpen, setIsSelectOpen] = useState(false)

  // contact info animation
  useGSAP(() => {
    gsap.from(".contact-info", {
      x: 100,
      duration: 0.4,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".contact-section",
        scroller: "body",
        start: "top 70%",
      }
    })
  }, [])

  // para animation
  const paraRef = useRef()
  useGSAP(() =>{
    gsap.from(paraRef.current, {
      y: 20,
      duration: 0.5,
      opacity: 0,
      scrollTrigger: {
        trigger: paraRef.current,
        scroller: "body",
        start: "top 80%",
      }
    })
  })


  
useGSAP(() => {
  if (isSelectOpen) {
    gsap.fromTo(
      ".custom-dropdown",
      {
        scale: 0.2,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "back.out(1.7)",
      }
    );
    gsap.to(".select-icon-rotate", {
      rotate: 180,
      duration: 0.04,
      ease: "power1"
    })
  }
  else{
    gsap.to(".select-icon-rotate", {
      rotate: 0,
      duration: 0.04,
      ease: "power1",
    })
    gsap.to(".custom-dropdown", {
      scale: 0.1,
      opacity: 0,
      duration: 0.9,
      ease: "power2.in"
    });
  }
}, [isSelectOpen]);


  

  const selectRef = useRef(null)
  useEffect(() => {
    function closeDropdown(e) {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsSelectOpen(false);
      }
    }
  
    window.addEventListener("click", closeDropdown);
  
    // Proper cleanup function
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="container-fluid py-2 w-100 bg-black">
      <div className="row contact-section mx-auto gy-5">
        {/* contact form col */}
        <div className="col col-12 col-lg-7 order-1 order-lg-0 contact-form py-4 px-3 p-md-5 rounded-4" >
          <MainHeading value={"Let’s work together!"} />
          <p ref={paraRef} className="small-font theme-text-color mx-auto lh-sm">I design and code beautifully simple things and i love what i do. Just simple like that!</p>

          <form className='my-5'>
            <div className="mb-3 d-flex flex-column flex-sm-row gap-3">
              <input type="text" className="form-control" id="firstName" aria-describedby="first name" placeholder='First Name' />
              <input type="text" className="form-control" id="lastName" aria-describedby="last name" placeholder='Last Name' />
            </div>
            <div className="mb-3 d-flex flex-column flex-sm-row gap-3">
              <input type="email" className="form-control" id="email" aria-describedby="email" placeholder='Email' />
              <input type="number" className="form-control" id="number" aria-describedby="number" placeholder='Phone Number' />
            </div>
            {/* custom select  */}
            <div ref={selectRef} className="custom-select mb-3 position-relative">
              <input type="button"
              onClick={() => setIsSelectOpen(prev => !prev)}
              className="form-control text-start select py-4" id="category" value={"-Please choose an option-"} aria-describedby="category" />
              <i className={`fa fa-angle-down small-text theme-text-color select-icon-rotate`}></i>
              <input type="hidden" />
              <ul className={`custom-dropdown bg-white rounded-2 flex-column gap-2 px-3 py-2 ${isSelectOpen? "d-flex":"d-none"}`}>
                <li className='fw-bold'>-Please choose an option-</li>
                <li className=''>Branding Design</li>
                <li>Web Design</li>
                <li>UI/UX Design</li>
                <li>App Design</li>
              </ul>
            </div>
            <div className="mb-3">
              <textarea className="form-control" id="message" rows="5" placeholder='Message' ></textarea>
            </div>

            <button className="btn rounded-pill gradient-btn text-white py-3">Send Message</button>
          </form>

        </div>

        {/* col 2 */}
        <div className="col col-12 col-lg-5 order-0 order-lg-1 px-3 px-md-5 d-flex flex-column gap-5 justify-content-center">
          {/* Phone */}
          <div className="d-flex gap-3 contact-info">
            <div className="icon static-gradient-btn">
              <i className="fa fa-phone text-white"></i>
            </div>
            <div className="info d-flex flex-column">
              <span className='info-head'>Phone</span>
              <span className="info-data focus-text">+01 123 654 8096</span>
            </div>
          </div>
          {/* Email */}
          <div className="d-flex gap-3 contact-info">
            <div className="icon static-gradient-btn">
              <i className="fa fa-envelope text-white"></i>
            </div>
            <div className="info d-flex flex-column">
              <span className='info-head'>Email</span>
              <span className="email focus-text info-data">gerolddesign@mail.com</span>
            </div>
          </div>
          {/* Address */}
          <div className="d-flex gap-3 contact-info">
            <div className="icon static-gradient-btn">
              <i className="fa fa-location-dot text-white"></i>
            </div>
            <div className="info d-flex flex-column">
              <span className='info-head'>Address</span>
              <span className="info-data focus-text">Warne Park Street Pine,<br /> FL 33157, New York</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
