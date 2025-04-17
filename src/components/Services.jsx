import React, { useRef } from 'react'

// gsap
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import { ServiceCard } from './Cards'
import { MainHeading, Tagline } from './elementComp'

gsap.registerPlugin(ScrollTrigger);

export default function Services() {




  return (
    <>
      {/* services section */}
      <div id='services' className="container-fluid m-0 bg-black py-2">
        <div className="services mx-auto w-100 p-0">
          <MainHeading value={"My Quality Services"} className={"text-center animate-text-up"} />
          <Tagline className={"text-center"} />
          {/* my services */}
          <div id='services-row' className="container-fluid m-0 w-100">

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