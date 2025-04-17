import React, { useRef } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Tagline({className}) {

    const tagRef = useRef()
    useGSAP(() => {
        gsap.from(tagRef.current, {
            y: 20,
            duration: 0.5,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: tagRef.current,
                scroller: "body",
                start: "top 80%",
            }
        })
    })

  return (
    <p ref={tagRef} className={`small-font tagline-text theme-text-color tagline-text mx-auto lh-sm ${className}`}>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>

  )
}
