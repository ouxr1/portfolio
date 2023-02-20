import './Services.css'
import photo from "../../assets/handshake-man-woman-after-signing-business-contract-closeup.jpg"
import Card from '../card/Card'
import list from "./List"
import { Container, Row ,Col } from 'react-bootstrap'
function Services() {

    const services=list.map(item=>
            <Card key={"empty"} service={item.service} price={item.price} description={item.description} />
        )
    
  return (
        <section className="services section-padding" id="section_3">
                <Container>
                    <Row>

                        <Col lg="10" xs={12} className="mx-auto">
                            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                <img src={photo} className="avatar-image img-fluid" alt=""/>
                                <h2 className="text-white ms-4 mb-0">Services</h2>
                            </div>

                            <Row className="pt-lg-5">
                                {services}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
  )
}

export default Services