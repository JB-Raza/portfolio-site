import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// service card
export const ServiceCard = ({ index, title, className }) => {

    const cardRef = useRef()
    useGSAP(() => {
        gsap.from(cardRef.current, {
            y: 20,
            duration: 0.7,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRef.current,
                scroller: "body",
                start: "top 80%",
            }
        })
    }, [])

    return (
        <div ref={cardRef} className={`row service-card py-2 py-lg-4 justify-content-center d-flex ${className}`}>
            <div className="col d-flex align-items-center gap-2 gap-lg-3 theme-text-color">
                <div className="count color-primary fw-bold fs-4">{index}</div>
                <h2 className='fw-bold normal-large-text'>{title}</h2>
            </div>
            {/* hide over md */}
            <div className="col col-1 d-flex d-md-none align-items-center justify-content-center">
                <button aria-label='learn-more' className='btn read-more-btn fs-3'>
                    <i className="fa-solid fa-arrow-up color-primary"></i>
                </button>
            </div>
            <div className="col col-12 col-md-5 col-lg-6 px-md-2">
                <p className='theme-text-color small-font  truncate-2-lines'>Conducting qualitative and quantitative research to understand user needs, behaviors, and pain points. Utilizing methods...</p>
            </div>
            {/* hide under md */}
            <div className="col col-1 d-none d-md-flex align-items-center justify-content-center">
                <button aria-label='learn-more' className='btn read-more-btn fs-3'>
                    <i className="fa-solid fa-arrow-up color-primary"></i>
                </button>
            </div>

        </div>
    )
}


// work portfolio card
export const WorkCard = ({ workData }) => {

    let workCardRef = useRef()
    let popupRef = useRef()

    useGSAP(() => {
        gsap.from(workCardRef.current, {
            opacity: 0,
            scale: 0,
            y: 100,
            duration: 0.4,
            ease: "power3.out",
            scrollTrigger: {
                trigger: workCardRef.current,
                scroller: "body",
                start: "top 120%",
                toggleActions: "play none none none",
            }
        })
    }, [])

    useEffect(() => {
        const card = workCardRef.current
        const popup = popupRef.current

        const handleEnter = () => {
            gsap.fromTo(
                popup,
                { bottom: 15 },
                { bottom: 30, duration: 0.1, ease: "power3.out" }
            );
        };
        const handleLeave = () => {
            gsap.to(popup, {
                bottom: 15,
                duration: 0.1,
                ease: "power3.in"
            });
        };
        card.addEventListener("mouseenter", handleEnter)
        card.addEventListener("mouseleave", handleLeave)
        return () => {
            card.removeEventListener("mouseenter", handleEnter)
            card.removeEventListener("mouseleave", handleLeave)
        };
    }, []);




    return (
        <div ref={workCardRef} className="col col-12 col-md-6 py-3 p-sm-3">
            <div className="card border-0 rounded-3 position-relative">
                <img src={workData.image} alt="" className="img-fluid" />
                <div ref={popupRef} className="card-popup">
                    <div className="card-head d-flex justify-content-between">
                        <h3 className="card-title text-white">{workData.title}</h3>
                        <i className='fa fa-arrow-up theme-text-color fs-4'></i>
                    </div>
                    <p className="text-white small-text">{workData.tagline}</p>
                </div>
            </div>
        </div>
    )
}

// qualification
export const QualificationCard = ({ data, type }) => {

    const cardRefExp = useRef()
    const cardRefEdu = useRef()

    useGSAP(() => [
        gsap.from(cardRefExp.current, {
            x: -50,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRefExp.current,
                scroller: "body",
                start: "top 80%",
            }
        })
    ], [])

    useGSAP(() => {
        gsap.from(cardRefEdu.current, {
            x: 50,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRefEdu.current,
                scroller: "body",
                start: "top 80%",
            }
        })
    }, [])
    return (
        <div ref={type == "exp" ? cardRefExp : cardRefEdu} className={`card mx-auto mx-md-0 col col-11 exp-education-card border-0 d-flex flex-column gap-1 rounded-4 ${type == "exp" ? "expCard" : "eduCard"}`}>
            <p className="fw-bold fs-5 mb-0 color-primary">{data.date}</p>
            <h3 className='text-white fw-bold fs-3'>{data.title}</h3>
            <p className="theme-text-color fw-semibold small-text">{data.place}</p>
        </div>
    )
}

export const SkillCard = ({ skillData }) => {

    const cardRef = useRef()

    useGSAP(() => {
        gsap.from(cardRef.current, {
            y: 15,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRef.current,
                scroller: "body",
                start: "top 80%",
            }
        })
    })

    return (
        <div ref={cardRef} className="card border-0 skill-card d-flex flex-column gap-3 rounded-5 bg-transparent">
            <div className="head py-4 rounded-4">
                <img src={skillData.image} alt="" className="img-fluid" />
                <p className="percentage fw-bold fs-4 m-0">{skillData.percent}%</p>
            </div>
            <p className="color-primary small-text fw-semibold text-center">{skillData.title}</p>
        </div>
    )
}

// testimonial
export const TestimonialCard = ({ testimonial }) => {
    return (
        <div className="card testimonial-card p-3 rounded-4">
            <div className="card-img-top">
                <img className='img-fluid' src={testimonial.image} alt="image" />
            </div>
            <div className="card-body px-1">
                <div className="testimonial-icon">
                    <i className="fa-solid fa-caret-left color-primary fs-1"></i><i className="fa-solid fa-caret-right color-primary fs-1"></i>
                </div>
                <p className="small-font theme-text-color mt-3">{testimonial.description}</p>
            </div>
            <div className="px-1 mt-auto">
                <h3 className="card-title fw-bolder text-white normal-font">{testimonial.name}</h3>
                <p className="designation theme-text-color small-font">{testimonial.designation}</p>
            </div>
        </div>
    )
}


// blog card
export const BlogCard = ({ blog }) => {

    const cardRef = useRef()
    useGSAP(() => {
        gsap.from(cardRef.current, {
            x: -20,
            duration: 1,
            opacity: 0,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRef.current,
                scroller: "body",
                start: "top 80%",
            }
        })
    })

    return (
        <div ref={cardRef} className="col col-12 col-sm-6 col-md-6 col-lg-4">
            {/* card 1 */}
            <div className="card mx-auto blog-card border-0">
                <div className="card-img-top">
                    <img src={blog.image} alt="" className="img-fluid w-100 rounded-4" />
                </div>
                <span className="badge fw-normal badge rounded-pill">SAAS</span>
                <div className="card-body">
                    {/* date and comments */}
                    <div className="date-and-comments d-flex flex-wrap gap-2">
                        <div className="date d-flex gap-1 align-items-center">

                            <i className="fa-solid fa-calendar-days color-primary fs-6"></i>
                            <span className='fw-semibold text-nowrap'>{blog.date}</span>
                        </div>
                        <div className="comments d-flex gap-1 align-items-center">
                            <i className="fa-solid fa-comments color-primary fs-6"></i>
                            <span className='fw-semibold text-nowrap'>No Comments</span>
                        </div>
                    </div>
                    <h3 className="text-white fw-bold mt-2" style={{ fontSize: "22px" }}>{blog.title}</h3>
                </div>
            </div>
        </div>
    )
}
