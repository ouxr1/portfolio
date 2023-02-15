import React from 'react'
import "./Header.css"
import Navitem from '../Navbar/Navitem'

export default function Header() {
  return (
    
    <nav className="navbar navbar-expand-lg portfolio-navbar">
    <div className="container">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <a href="index.html" className="navbar-brand mx-auto mx-lg-0">WIPI</a>

        <div className="d-flex align-items-center d-lg-none">
            <i className="navbar-icon bi-telephone-plus me-3"></i>
            <a className="custom-btn btn" href="#section_5">
                00212708159822
            </a>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-5">
                <Navitem>
                    <a className="nav-link click-scroll" href="#section_1">Home</a>
                </Navitem>

                <Navitem>
                    <a className="nav-link click-scroll" href="#section_2">About</a>
                </Navitem>

                <Navitem>
                    <a className="nav-link click-scroll" href="#section_3">Services</a>
                </Navitem>

                <Navitem>
                    <a className="nav-link click-scroll" href="#section_4">Projects</a>
                </Navitem>

                <Navitem>
                    <a className="nav-link click-scroll" href="#section_5">Contact</a>
                </Navitem>
            </ul>

            <div className="d-lg-flex align-items-center d-none ms-auto">
                <i className="navbar-icon bi-telephone-plus me-3"></i>
                <a className="custom-btn btn" href="#section_5">
                    +212708159822
                </a>
            </div>
        </div>

    </div>
</nav>
  )
}
