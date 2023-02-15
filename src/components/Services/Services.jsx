import './Services.css'
import photo from "../../assets/handshake-man-woman-after-signing-business-contract-closeup.jpg"
import Card from '../card/Card'
import list from "./List"
function Services() {

    const services=list.map(item=>
            <Card key={"empty"} service={item.service} price={item.price} description={item.description} />
        )
    
  return (
    <>
        <section className="services section-padding" id="section_3">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                                <img src={photo} className="avatar-image img-fluid" alt=""/>

                                <h2 className="text-white ms-4 mb-0">Services</h2>
                            </div>

                            <div className="row pt-lg-5">
                                {services}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Services