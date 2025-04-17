import React from 'react'
import { Download } from 'react-bootstrap-icons'

export default function Hero() {


  return (
    <>
      <div className="container hero-section my-0 p-0">
        {/* hero data */}
        <div className="row gx-5">
          <div className="col col-12 col-md-6 my-auto d-flex gap-2 flex-column">
            <p className='fs-2 mx-3 my-1 mx-sm-0 fs-md-1 text-white fw-bold'>I am Gerold</p>
            <h1 className="hero-title mx-3 mx-sm-0 text-white gradient-overlay">Web Developer + UX Designer</h1>
            <p className="hero-description normal-font lh-base d-none d-md-block theme-text-color">I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>

            {/* cv and social btns */}
            <div className="cv-social-btns d-none d-md-flex align-items-center gap-3 flex-wrap my-4">
              <button className="cv-btn px-5 py-3 btn rounded-pill d-flex gap-2 align-items-center color-primary border-primary">
                Download CV
                <Download className='fs-6' />
              </button>
              <div className="social-btns d-flex gap-3">

                <button aria-label='facebook' className="btn-icon animate-icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button aria-label='facebook' className="btn-icon animate-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
                <button aria-label='facebook' className="btn-icon animate-icon">
                  <i className="fa-brands fa-dribbble"></i>
                </button>
                <button aria-label='facebook' className="btn-icon animate-icon">
                  <i className="fa-brands fa-github"></i>
                </button>
              </div>

            </div>

          </div>

          {/* pic section */}
          <div className="col col-12 col-md-6 d-flex justify-content-center flex-column align-items-center">
            <img className='my-pic img-fluid rounded rounded-5 border-dark-purple my-5' src="./personal_pick.webp" alt="my picture" />
            <p className="hero-description m-0 fs-4 d-block d-md-none theme-text-color px-3 px-sm-0">I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
             {/* cv and social btns */}
             <div className="btns d-flex d-md-none me-auto my-4 align-items-center justify-content-center flex-wrap gap-4">
              <button className="cv-btn px-5 py-3 btn rounded-pill d-flex gap-2 align-items-center color-primary border-primary">
                Download CV
                <Download className='fs-6' />
              </button>
              <div className="social-btns d-flex gap-3">
                <button aria-label='facebook' className="btn-icon animate-icon">
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button aria-label='facebook' className="btn-icon animate-icon">
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
                <button aria-label='facebook' className="btn-icon animate-icon">
                  <i className="fa-brands fa-dribbble"></i>
                </button>
                <button aria-label='facebook' className="btn-icon animate-icon">
                  <i className="fa-brands fa-github"></i>
                </button>
              </div>

            </div>
          </div>
        </div>

        
      </div>
      {/* experties */}
      <div className="custom-container mx-auto">

      <div className="row mx-3 d-flex justify-center align-items-center row-cols-1 row-cols-sm-2 row-cols-lg-4 my-4 ">
          {/* col 1 */}
          <div className="col d-flex align-items-center gap-3">
            <h2 className='text-white xl-large-font fw-bolder'>14</h2>
            <span className='small-font theme-text-color'>Years of <br /> Exprerience</span>
          </div>
          {/* col 2 */}
          <div className="col d-flex align-items-center gap-3">
            <h2 className='text-white xl-large-font fw-bolder'>50+</h2>
            <span className='small-font theme-text-color'>Projects <br /> Completed</span>
          </div>
          {/* col 3 */}
          <div className="col d-flex align-items-center gap-3">
            <h2 className='text-white xl-large-font fw-bolder'>1.5K</h2>
            <span className='small-font theme-text-color'>Happy <br /> Clients</span>
          </div>
          {/* col 4 */}
          <div className="col d-flex align-items-center  gap-3">
            <h2 className='text-white xl-large-font fw-bolder'>14</h2>
            <span className='small-font theme-text-color'>Years of <br /> Exprerience</span>
          </div>
        </div>
        </div>

    </>
  )
}
