import React from 'react'
import ServicesFooter from './ServicesFooter/ServicesFooter'
import ServicesFooterIcon from './ServicesFooterIcon/ServicesFooterIcon'
import ServicesStatu from './ServicesStatu/ServicesStatu'
import './ContactInfo.css'
import { Col } from 'react-bootstrap'

function ContactInfo() {
  return (
    
    
      <Col lg="3" md="6" xs={12} className=' pe-lg-0'>
        <div className='contact-info contact-info-border-start d-flex flex-column'>
        
        

        <ServicesFooter/>
        <ServicesFooterIcon/>
        <ServicesStatu/>




        </div>
    </Col>
  )
}

export default ContactInfo