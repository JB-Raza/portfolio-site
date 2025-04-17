import React, { useEffect, useState, useRef } from 'react'
import { WorkCard } from './Cards.jsx'
import { MainHeading } from './elementComp.js'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WorkPortfolio() {

  // animating work navbar
  useGSAP(() => {
    gsap.from(".work-navbar", {
      y: 40,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".work-navbar",
        scroller: "body",
        start: "top 80%",
      }
    })
  }, [])

  const [activeFilter, setActiveFilter] = useState("")
  const [listings, setListings] = useState(workPortfolioData)
  const [navlinkWidth, setNavlinkWidth] = useState([])

  const navlinkRefs = useRef([])
  const activeNavRef = useRef()


  // calculating width of each navlink
  useEffect(() => {
    const widths = navlinkRefs.current.map((navlink) => navlink?.getBoundingClientRect().width || 0)
    setNavlinkWidth(widths)

    const defaultIndex = navlinks.findIndex(
      (link) => link.toLowerCase() === "all"
    );
  
    if (defaultIndex !== -1 && navlinkRefs.current[defaultIndex]) {
      const activeLink = navlinkRefs.current[defaultIndex];
      gsap.set(activeNavRef.current, {
        left: activeLink.offsetLeft,
        width: widths[defaultIndex],
      });
    }

  }, [navlinks])

  // handle click on navlink of work row
  const handleNavlinkClick = (index) => {
    let filter = navlinks[index].toLowerCase()
    setActiveFilter(filter);

    if (filter == "all" || filter == "") setListings(workPortfolioData)
    else setListings(workPortfolioData?.filter((listing) => listing.type == filter))

    const activeLink = navlinkRefs.current[index];
    if (activeLink) {
      gsap.to(activeNavRef.current, {
        left: activeLink.offsetLeft,
        width: navlinkWidth[index],
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };


  return (
    <>
      {/* recent work */}
      <div className="container-fluid my-0 px-0 px-sm-3 py-2">
        <div className="my-5 py-4 mx-auto px-0">

          <MainHeading value={"My Recent Works"} className={"text-center"} />

          <div className="mx-auto work-navbar bg-black my-5 rounded-pill px-0 py-2">
            <ul className='navbar-nav p-0 d-flex flex-row flex-wrap justify-content-center gap-1 text-white'>
              <div ref={activeNavRef} className="active-work-navlink rounded-pill"></div>
              {(navlinks || []).map((navlink, index) => (
                <li
                  ref={(el) => (navlinkRefs.current[index] = el)}
                  key={index}
                  onClick={() => handleNavlinkClick(index)}
                  className={`px-4 py-2 rounded-pill fw-semibold`}>{navlink}</li>
              ))}
            </ul>
          </div>

          {/* my Works */}
          <div className="container-fluid m-0 w-100 p-0 mx-auto">
            <div className="row portfolio-row position-relative p-0">
              <div className={`bg-overlay ${listings.length > 0 ? "d-block" : "d-none"}`}></div>
              {/* card column 1 */}
              {(listings || []).map((work, index) => (
                <WorkCard key={index} workData={work} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



const workPortfolioData = [
  { title: "Dolaitte", tagline: "Project was about Precision and information", image: "./portfolio/portfolio-1.webp", type: "app" },
  { title: "New Age", tagline: "Project was about Precision and information", image: "./portfolio/portfolio-2.webp", type: "app" },
  { title: "Sebastian", tagline: "Project was about Precision and information", image: "./portfolio/portfolio-3.webp", type: "ui/ux" },
  { title: "Mochnix", tagline: "Project was about Precision and information", image: "./portfolio/portfolio-4.webp", type: "branding" },
]

const navlinks = ["All", "App", "Branding", "Content", "UI/UX"]