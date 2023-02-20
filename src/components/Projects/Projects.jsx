import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Projects = () => {
  return (
      <section className="projects section-padding" id="section_4">
                <Container>
                    <Row>
                        <Col lg="8" md="8" xs={12} className="ms-auto">
                            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
                                <img src="images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt=""/>

                                <h2 className="text-white ms-4 mb-0">Projects</h2>
                            </div>
                        </Col>

                        <div className="clearfix"></div>

                        <Col lg="4" md="6" xs={12}>
                            <div className="projects-thumb">
                                <div className="projects-info">
                                    <small className="projects-tag">Branding</small>
                                    <h3 className="projects-title">Zoik agency</h3>
                                </div>
                                <a href="images/projects/nikhil-KO4io-eCAXA-unsplash.jpg" className="popup-image">
                                    <img src="images/projects/nikhil-KO4io-eCAXA-unsplash.jpg" className="projects-image img-fluid" alt=""/>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
  )
}

export default Projects