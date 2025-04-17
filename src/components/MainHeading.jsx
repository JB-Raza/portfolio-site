import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register plugin only once globally
gsap.registerPlugin(ScrollTrigger)

export const MainHeading = ({ value, className }) => {
  const headingRef = useRef()

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 40,
      duration: 0.3,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })
  }, [])

  return (
    <h1
      ref={headingRef}
      className={`large-font fw-bold gradient-overlay ${className}`}
    >
      {value}
    </h1>
  )
}
