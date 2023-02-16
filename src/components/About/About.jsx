import './About.css'
import photo from "../../assets/aboutme.jpg"
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

                                <p>This is my portfolio I am a student, specialized technician, in the process of obtaining a diploma in full stack development. I am currently looking for an internship in a company or public structures to invest my knowledge in the field of full stack development.
                                I master many languages and skills in web development, I am versatile in IT and I have mastered English and French</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    </>
  )
}

export default About