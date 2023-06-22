import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
    {/* social icons */}
    <ul className="social-icons hero-icons">
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" className="social-icon">
                {" "}
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
    <p> &copy; <span> 2023</span> Tonny Tei. All rights preserved</p>
      </footer>
    </>
  )
}

export default Footer
