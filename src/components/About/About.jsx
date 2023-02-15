import './About.css'
import photo from "../../assets/couple-working-from-home-together-sofa.jpg"
import photo2 from "../../assets/happy-bearded-young-man.jpg"
function About() {
  return (
    <>
        <section className="about section-padding" id="section_2">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-12">
                            <img src={photo} className="about-image img-fluid" alt=""/>
                        </div>

                        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
                            <div className="about-thumb">

                                <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                                    <h2 className="text-white me-4 mb-0">My Story</h2>

                                    <img src={photo2} className="avatar-image img-fluid" alt=""/>
                                </div>

                                <h3 className="pt-2 mb-3">a little bit about me</h3>

                                <p>This one-page HTML portfolio is provided by <a href="https://templatemo.com" >TemplateMo</a>. This layout is based on Bootstrap v5.1.3 CSS and JS libraries. Image credits go to <a href="https://unsplash.com" >Unsplash</a> and <a href="https://freepik.com" >FreePik</a> for images used in this page.</p>

                                <p>You are allowed to use this template for your websites. You are not allowed to redistribute the template ZIP file on any other website. Please <a href="https://templatemo.com/contact" >contact us</a> for more info.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </>
  )
}

export default About