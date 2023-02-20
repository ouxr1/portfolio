import './About.css'
import photo from "../../assets/aboutme.jpg"
import photo2 from "../../assets/happy-bearded-young-man.jpg"
import { Col, Container, Row } from 'react-bootstrap'



function About() {
  return (
    <>
        <section className="about section-padding" id="section_2">
                <Container>
                    <Row>

                        <Col lg="6" xs={12}>
                            <img src={photo} className="about-image img-fluid" alt=""/>
                        </Col>

                        <Col lg="6" xs={12} className="mt-5 mt-lg-0">
                            <div className="about-thumb">

                                <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                    <h2 className="text-white me-4 mb-0">My Story</h2>

                                    <img src={photo2} className="avatar-image img-fluid" alt=""/>
                                </div>

                                <h3 className="pt-2 mb-3">a little bit about me</h3>

                                <p>This is my portfolio I am a student, specialized technician, in the process of obtaining a diploma in full stack development. I am currently looking for an internship in a company or public structures to invest my knowledge in the field of full stack development.
                                I master many languages and skills in web development, I am versatile in IT and I have mastered English and French</p>
                                <p className="mb-4"><a className="custom-btn btn custom-link" href="#section_2">Download CV</a></p>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
    </>
  )
}

export default About