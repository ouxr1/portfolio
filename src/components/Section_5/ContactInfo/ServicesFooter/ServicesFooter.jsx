import React from 'react'
import './ServicesFooter.css'



function ServicesFooter() {
  return (
    <>
      <strong className="site-footer-title d-block mb-3">Services</strong>
            <ul className="footer-menu">
                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Websites</a></li>

                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Branding</a></li>

                <li className="footer-menu-item"><a href="#" className="footer-menu-link">Ecommerce</a></li>

                <li className="footer-menu-item"><a href="#" className="footer-menu-link">SEO</a></li>
            </ul>
    </>
  )
}

export default ServicesFooter