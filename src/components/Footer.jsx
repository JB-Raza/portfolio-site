import React from 'react'

export default function Footer() {
  return (
    <div className='container-fluid'>
      <footer className=" d-flex flex-column mx-auto align-items-center">
        <img src="./logo-primary.webp" alt="" className="img-fluid logo" />

        <div className="navbar mt-4">
          <ul className="footer-nav d-flex flex-wrap justify-content-center gap-3 gap-md-5">
            <li className='px-4 py-2 fw-semibold nav-link text-white'>Services</li>
            <li className='px-4 py-2 fw-semibold nav-link text-white'>Work</li>
            <li className='px-4 py-2 fw-semibold nav-link text-white'>Skills</li>
            <li className='px-4 py-2 fw-semibold nav-link text-white'>Experience</li>
            <li className='px-4 py-2 fw-semibold nav-link text-white'>Blog</li>
          </ul>
        </div>
        <p className="color-primary text-center small-font m-0">© 2024 All Rights Reserved by <strong>Jahanzaib Raza</strong> </p>
      </footer>
    </div>
  )
}
