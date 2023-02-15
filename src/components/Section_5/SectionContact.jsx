import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ContactInfo from './ContactInfo/ContactInfo'
import ContactInfo2 from './ContactInfo2/ContactInfo2'
import Form from './form/Form'
import './SectionContact.css'


function SectionContact() {
  return (
    <div>
            <section class="contact section-padding" id="section_5">
                    <Container>
                        <Row>
                                <Col lg="6" md="8" xs={12}>
                                    <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                        <img src="images/aerial-view-man-using-computer-laptop-wooden-table.jpg" className="avatar-image img-fluid" alt=""/>

                                        <h2 className="text-white ms-4 mb-0">Say Hi</h2>
                                    </div>
                                </Col>
                                <div className="clearfix"></div>
                                <ContactInfo/>
                                <ContactInfo2/>
                                <Form/>
                                
                                    
                            </Row>
                        </Container>
                    </section>
    </div>
  )
}

export default SectionContact