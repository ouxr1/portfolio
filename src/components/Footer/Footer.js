import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Container from '../Container/Container'
import "./Footer.css"

export default function Footer() {
  return (
    
    <footer class="site-footer">
      <Container>
        <Row>
            <Col lg="12" xs={12} className="col-lg-12 col-12">
                <div className="copyright-text-wrap">
                    <p className="mb-0">
                        <span className="copyright-text"> <a href="#">First Portfolio</a> Company. All rights reserved.</span>
                        Design: 
                        <a rel="sponsored" href="https://templatemo.com" target={'_blank'}></a>
                    </p>
                </div>
            </Col>

        </Row>
      </Container>
    </footer>

  )
}
