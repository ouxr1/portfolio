import React from 'react'
import Email from './email/Email'
import Call from './Call/Call'
import About from './About/About'
import './ContactInfo2.css'
import { Col } from 'react-bootstrap'


function ContactInfo2() {
  return (               
        <Col lg="3" md="6" xs={12} className=" ps-lg-0">
            <div className="contact-info d-flex flex-column">
                <Email/>
                <Call/>
                <About/>
    </div>
</Col>

  )
}

export default ContactInfo2