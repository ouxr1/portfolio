import { Col, Container, Row } from 'react-bootstrap'
import './Featured.css'

function Featured() {
  return (
    
        <section className="featured section-padding">
                <Container>
                    <Row>

                        <Col xs={12} lg="6">
                            <div className="profile-thumb">
                                <div className="profile-title">
                                    <h4 className="mb-0">Information</h4>
                                </div>

                                <div className="profile-body">
                                    <p>
                                        <span className="profile-small-title">Name</span> 
                                        <span>Oussama Benstitou</span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Birthday</span> 
                                        <span>oct 12, 2001</span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Phone</span> 
                                         <span><a href="tel: +212708159822">+212708159822</a></span>
                                    </p>

                                    <p>
                                        <span className="profile-small-title">Email</span> 
                                        <span><a href="oussamaabd57@gmail.com">oussamaabd57@gmail.com</a></span>
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col lg="6" xs={12} className=" mt-5 mt-lg-0">
                            <div className="about-thumb">
                                <Row>
                                    <Col lg="6" xs={6} className="col-lg-6 col-6 featured-border-bottom py-2">
                                        <strong className="featured-numbers">0</strong>
                                        <p className="featured-text"></p>
                                    </Col>

                                    <Col lg="6" xs={6} className="featured-border-start featured-border-bottom ps-5 py-2">
                                        <strong className="featured-numbers">0</strong>

                                        <p className="featured-text">Happy Customers</p>
                                    </Col>

                                    <Col lg="6" xs={6} className=" pt-4">
                                        <strong className="featured-numbers">4</strong>

                                        <p className="featured-text">Project Finished</p>
                                    </Col>

                                <Col lg="6" xs={6} className=" featured-border-start ps-5 pt-4">
                                    <strong className="featured-numbers">0</strong>

                                <p className="featured-text">Digital Awards</p>
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row>
        </Container>
    </section>
    
  )
}

export default Featured