import React, { useEffect, useRef } from 'react'

// gsap
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import { ServiceCard } from './Cards'
import { MainHeading, Tagline } from './elementComp'

gsap.registerPlugin(ScrollTrigger);

export default function Services() {

  const overlayRef = useRef()
  const serviceRowRef = useRef()

  useEffect(() => {
    const row = serviceRowRef.current;
    if (!row) return;

    const handleMouseEnter = (e) => {
      const rowRect = row.getBoundingClientRect();
      const relativeY = e.clientY - rowRect.top
      const cardHeight = rowRect.height / serviceData.length
      const index = Math.floor(relativeY / cardHeight)
      const targetY = index * cardHeight;
    

      gsap.to(overlayRef.current, {
        y: targetY,
        duration: 0.1,
        ease: "power3.out"
      });
    }
    row.addEventListener("mouseover", handleMouseEnter);
  
    return () => {
      row.removeEventListener("mouseover", handleMouseEnter);
    };
  }, []);

  const handleHoverEffect = (e) => {
    let yCord = e.clientY
    if(e.target.classList.contains("service-card")){
      overlayRef.current.style.transform = `translateY(${100}%)`
    }
  }







  return (
    <>
      {/* services section */}
      <div onClick={handleHoverEffect} id='services' className="container-fluid m-0 bg-black py-2">
        <div className="services mx-auto w-100 p-0">
          <MainHeading value={"My Quality Services"} className={"text-center animate-text-up"} />
          <Tagline className={"text-center mb-5"} />
          {/* my services */}
          <div ref={serviceRowRef} id='services-row' className="container-fluid overflow-hidden m-0 w-100">
            <div ref={overlayRef} className="bg-overlay"></div>
            {(serviceData || []).map((service, index) => (
              <ServiceCard key={index} index={"0" + (index + 1)} title={service} className={"animate-card"} />
            ))}

          </div>
        </div>
      </div>

    </>
  )
}


const serviceData = ["Web Development", "UI/UX Design", "Content Writing", "Digital Marketing"]