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
                <a className="custom-btn btn" href="#section_5">
                <i class='bx bxs-phone-call' ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAY5JREFUSEvVle0xQ1EQht9UgApIBagAFZAKUAEqQAWogFSAClABOlCCDpgns3tnrbM3cmfyw85kksnds89+vHvuSEu20ZLjayjgS9KbfR4kPVaJVoBrSeuSjiV9Ng4DiAYMX75/WAasSrqXtGtez5L2iuy2zO/UkiGRM0l30T8DyGAzBeQA2fUZFZ9YtSTUVZIBuXQPmiFk+yqJCi/NySEE3/aDfwXgT/kEwWIiMeCHtWsiieH/UhEZ7RS9QCkH4Rm/L6ylDmceV5Kmko5aAFpx2AC820CzooAgihd7zuBpXVdVbpEfiIwquPvQLsBrqX2z2C2Z0seVQBhL4r9B1lq03CZUQq8HWQuwYT30Kigf2eUqWMpbk+pNRa+uCjI+D4cYGtJzCMGfJDFUrFzGvssOHe8HCJWwB0gQ5Xhwd2lC+gBkyV7kq6NvFvhTaSfnedc1ECqplq8F65asJdMqO2bClkb5Vr4MHN+ZzasgBkFdgFjGCuQb3Z1bBOCHaBsQ3hlAvX3NjR8CWGjh/j/gG+gKUhl2keNfAAAAAElFTkSuQmCC"/></i>
                </a>
                <a className="custom-btn btn" href="#section_5">
                <i class='bx bxl-linkedin-square'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOdJREFUSEvllWENwjAQhb8pAAk4AAeAA1AAEnCCBXAACgAHSEACKIC85Eqabg0s1y0h3K82ub5vd++6VnQcVcf69A44A1NnVdKYB420gqdTvKabAzyAg2UvgEFL8Fs3B9gDaxPdAaufA9yTFg1LVyAPriY6MQ8uth8BAsqjGyCPxskHfPRAYjM7FEY3HJI3EleVITbANtq7ALluCRimzQVQe06AWreMvIovqQug1gmgOJoHWncCaPJKsGIV/DFAIxdfNE2OTFRorQlSNOV95UHLP0MtPWtyiQcnNr7/J9Pbmnyviiub4As/E0wZX0UvUwAAAABJRU5ErkJggg=="/></i>
                </a>
                
            </div>
        </div>

    </div>
</nav>
  )
}
