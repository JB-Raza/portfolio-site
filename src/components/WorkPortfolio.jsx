import React, { useEffect, useState, useRef } from 'react'
import { WorkCard } from './Cards.jsx'
import { MainHeading } from './elementComp.js'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function WorkPortfolio() {

  // gsap
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


  const handleFilterChange = (filter) => {
    if (activeFilter == "all" || activeFilter == "") setListings(workPortfolioData)
    else setListings(workPortfolioData.filter((listing) => listing.type == filter))
  }
  useEffect(() => {
    handleFilterChange(activeFilter)
  }, [activeFilter])


  return (
    <>
      {/* recent work */}
      <div className="container-fluid m-0 py-2">
        <div className="my-5 py-4 mx-auto px-0">

          <MainHeading value={"My Recent Works"} className={"text-center"} />

          <div className="mx-auto work-navbar bg-black my-5 rounded-pill px-0 py-2">
            <ul className='navbar-nav p-0 d-flex flex-row flex-wrap justify-content-center gap-1 text-white'>
              <li onClick={() => setActiveFilter('all')} className={`px-4 py-2 rounded-pill fw-semibold ${activeFilter == "" || activeFilter == "all" ? "active-work-navlink" : ""}`}>All</li>
              <li onClick={() => setActiveFilter('app')} className={`px-4 py-2 rounded-pill fw-semibold ${activeFilter == "app" ? "active-work-navlink" : ""}`}>Apps</li>
              <li onClick={() => setActiveFilter('branding')} className={`px-4 py-2 rounded-pill fw-semibold ${activeFilter == "branding" ? "active-work-navlink" : ""}`}>Branding</li>
              <li onClick={() => setActiveFilter('content')} className={`px-4 py-2 rounded-pill fw-semibold ${activeFilter == "content" ? "active-work-navlink" : ""}`}>Content</li>
              <li onClick={() => setActiveFilter('ui/ux')} className={`px-4 py-2 rounded-pill fw-semibold ${activeFilter == "ui/ux" ? "active-work-navlink" : ""}`}>UX/UI</li>
            </ul>
          </div>

          {/* my Works */}
          <div className="container-fluid m-0 w-100">
            <div className="row portfolio-row position-relative">
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