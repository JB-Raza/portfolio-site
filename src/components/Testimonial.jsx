import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { TestinomialCard } from './elementComp.js'

import { MainHeading } from './elementComp.js'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import gsap
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


export default function Testimonial() {

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

  return (
    <div className="container-fluid py-2 w-100 bg-black">
      <div className="row testinomial-section mx-auto g-5">
        {/* col 1 */}
        <div className="col col-12 col-xl-6 px-4">
          <MainHeading value={"My Client's Stories"} />
          <p ref={paraRef} className="normal-font theme-text-color">Empowering people in new a digital journey with my super services</p>
        </div>

        {/* col 2 swiper */}
        <div className="col col-12 col-xl-6">

          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            loop={true}
            freeMode={true}
            speed={1500}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: '.my-custom-pagination',
              bulletClass: 'my-bullet',
              bulletActiveClass: 'my-bullet-active'
            }}

            breakpoints={{
              550: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 2 },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}

          >
            {(testinomialData || []).map((testinomial, i) => (
              <SwiperSlide key={i}>
                <TestinomialCard testinomial={testinomial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}


const testinomialData = [
  { name: "Ironman", description: "Tailor is a Professional he really helps my business by providing value to my business", image: "./clients/testi-1.webp", designation: "Senior Software Dev, Cosmic Sport" },
  { name: "Tim Bailey", description: "Tailor is a Professional he really helps my business by providing value to my business", image: "./clients/testi-2.webp", designation: "SEO Specialist, Theme Junction" },
  { name: "Brad Pitt", description: "Tailor is a Professional he really helps my business by providing value to my business", image: "./clients/testi-1.webp", designation: "Senior Software Dev, Cosmic Sport" },
  { name: "Thor", description: "Tailor is a Professional he really helps my business by providing value to my business", image: "./clients/testi-2.webp", designation: "Senior Software Dev, Cosmic Sport" },
]