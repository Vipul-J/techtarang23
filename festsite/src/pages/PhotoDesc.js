import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style/core.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { faArrowUpFromBracket, faAward, faBrain, faCameraAlt, faCircleExclamation, faFaceSmileBeam, faFaceSmileWink, faFaceSurprise, faFlagCheckered, faImage, faMugHot, faPeopleGroup, faPhone, faRightToBracket, faShekelSign, faShuttleSpace, faSmileWink, faSurprise, faTrophy, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import photoImg from "../assets/images/photo.png"

function PhotoDesc() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <section>
                <div className='container'>
                    <div className='p-md-5 p-3'>
                        <h1 className='text-success text-center mb-1 mt-4'>GRAPHOS - Unleash The Power Of Visual Story Telling</h1>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="hero-content darkBlue-text" data-aos="fade-right" data-aos-duration="1200">
                                    <p>Master the art of capturing the images. Freeze moments in time, preserve memories, convey emotions and tell stories through your captures.
                                        Photograph the keen eye details, creativity with your unique perspective & proficiency.</p>

                                    <p>It's time to get the best out of your skills to communicate through pictures, moments & emotions. Get ready and excited to express your ideas through visual imagery, because PHOTOGRAPHS speak louder than words!</p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={photoImg} height={260} data-aos="fade-up" data-aos-duration="1800" className='img-ani'/>
                            </div>
                        </div>
                        <h4 className='darkBlue-text'>Rules and Regulations</h4>
                        <ul>
  <li className='darkBlue-text'>Photos should be clicked from Android phones only.</li>
  <li className='darkBlue-text'>No filters must be used while clicking pictures.</li>
  <li className='darkBlue-text'>Participants should have basic editing skills.</li>
  <li className='darkBlue-text'>Participants should have basic knowledge about Picsart and Vn.</li>
  <li className='darkBlue-text'>Picsart and Vn apps must be pre-installed on the Android phones.</li>
</ul>
                    </div>
                </div>

                <div className='hero-wrapper'>
                    <div className="container">
                        <div className="p-md-5 text-center mt-5">
                            <div className="row">
                                <h1 className='mb-5 text-white mt-5'>Pre Requisite</h1>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="800">
                                    <span className="text-white"><FontAwesomeIcon icon={faCameraAlt} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">No DSLR???
                                        Don't fear when your phone camera is here!</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                    <span className="text-white"><FontAwesomeIcon icon={faShekelSign} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Editing skills : None. But, the number of Edited images seen : Infinity
                                    </p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1000">
                                    <span className="text-white"><FontAwesomeIcon icon={faImage} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Have patience of a Saint and you will have perfect images as your boon!</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1800">
                                    <span className="text-white"><FontAwesomeIcon icon={faUserNinja} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Ninja like reflexes, blends like chameleon and shots like a piece of an ART!</p>
                                </div>
                            </div>
                            <h1 className='mb-3 text-white mt-4 text-decoration-underline'>Contact / Help</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Student Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Miss. Sanjana Gururaj - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/8861712256"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Mr. Vishwanath N - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/8660854864"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Faculty Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Prof. Rashmi Shetty -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9819162430"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800"> Prof. Soniya gudgunti
                                        -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9880677290"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className='text-center p-5 darkBlue-text text-decoration-underline'>Get ready and excited to express your ideas through visual imagery, because PHOTOGRAPHS speak louder than words!
                </h4>
            </section>
            <Footer />
        </>
    )
}

export default PhotoDesc