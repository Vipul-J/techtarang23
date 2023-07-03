import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style/core.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { faArrowUpFromBracket, faAward, faBookDead, faBrain, faBrush, faCircleExclamation, faClapperboard, faFaceSmileBeam, faFaceSmileWink, faFaceSurprise, faFlagCheckered, faMugHot, faPeopleGroup, faPhone, faRightToBracket, faShuttleSpace, faSmileWink, faSurprise, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faSuperpowers, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import designImg from "../assets/images/designing.png"

function DesignDesc() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <section>
                <div className='container'>
                    <div className='p-md-5 p-3'>
                        <h1 className='text-success text-center mb-1 mt-4'>MINERVA - Desire it......Design it! </h1>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="hero-content darkBlue-text" data-aos="fade-right" data-aos-duration="1200">
                                    <p>Transform your ideas, concepts, and requirements into aesthetically pleasing forms. Balance each form carefully with excellent details and fonts to have the best masterpiece and design. </p>

                                    <p>Peeps, it's time to show case your best creativity and enhance your innovative skills and join with the trends show what you got!
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={designImg} height={250} data-aos="fade-up" data-aos-duration="1800" className='img-ani' />
                            </div>
                        </div>
                        <h4 className='darkBlue-text'>Rules and Regulations</h4>
                        <ul>
                            <li className='darkBlue-text'>Each team should have a laptop compulsorily.</li>
                            <li className='darkBlue-text'>They should have their own internet access.</li>
                            <li className='darkBlue-text'>If found browsing the internet, the team will be disqualified.</li>
                            <li className='darkBlue-text'>Participants must have knowledge about Figma and Canva.</li>
                            <li className='darkBlue-text'>Figma and Canva must be pre-installed on the laptops.</li>
                        </ul>
                    </div>
                </div>
                <div className='hero-wrapper'>
                    <div className="container">
                        <div className="p-md-5 text-center mt-5">
                            <div className="row">
                                <h1 className='mb-5 text-white mt-5'>Pre Requisite</h1>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="800">
                                    <span className="text-white"><FontAwesomeIcon icon={faSuperpowers} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Superhuman color perception Alert : Light blue is different from baby blue! </p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                    <span className="text-white"><FontAwesomeIcon icon={faBrush} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Elegent fonts = enhanced occasion worthy designs.</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1000">
                                    <span className="text-white"><FontAwesomeIcon icon={faClapperboard} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Develop telepathic skills and articulate the best!</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1800">
                                    <span className="text-white"><FontAwesomeIcon icon={faBookDead} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Have the  power to meet impossible deadlines and deliver exceptional designs!</p>
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
                <h4 className='text-center p-5 darkBlue-text text-decoration-underline'>Transform your ideas, concepts, and requirements into aesthetically pleasing forms.</h4>
            </section>
            <Footer />
        </>
    )
}

export default DesignDesc