import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style/core.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { faArrowUpFromBracket, faAward, faBrain, faCameraAlt, faCircleExclamation, faClover, faEarListen, faFaceFrownOpen, faFaceSmileBeam, faFaceSmileWink, faFaceSurprise, faFlagCheckered, faImage, faMessage, faMugHot, faPeace, faPeopleGroup, faPhone, faRightToBracket, faShekelSign, faShuttleSpace, faSmileWink, faSurprise, faTrophy, faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { faCreativeCommons, faCreativeCommonsBy, faCreativeCommonsSa, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import comImg from "../assets/images/communication.png"

function CommDesc() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <section>
                <div className='container'>
                    <div className='p-md-5 p-3'>
                        <h1 className='text-success text-center mb-1 mt-4'>SAMPRAVADANA - Where words become bridges</h1>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="hero-content darkBlue-text" data-aos="fade-right" data-aos-duration="1200">
                                    <p>A round designed for the PU level students, which gives them a chance to conquer  just by the power of their words and thier overall presentation.
                                        Their knowledge, speech and body language are the main points of consideration for their overall winning.
                                        Come, Participate and Win!! </p>

                                    <p>Whether you aspire to be a dynamic public speaker, a charismatic presenter, or a persuasive negotiator, this conclave will equip you with the tools to succeed. Join us and harness the power of communication to make a lasting impression and propel your career to new heights.</p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={comImg} height={300} data-aos="fade-up" data-aos-duration="1800" className='img-ani' />
                            </div>
                        </div>
                        <h4 className='darkBlue-text'>Rules and Regulations</h4>
                        <ul>
                            <li><span class="darkBlue-text">Pair of 2 participants.</span></li>
                            <li><span class="darkBlue-text">Total of 3 rounds. Resources are provided by college itself.</span></li>
                            <li><span class="darkBlue-text">No use of electronic gadgets.</span></li>
                            <li><span class="darkBlue-text">Judges decision will be final.</span></li>
                        </ul>
                    </div>
                </div>

                <div className='hero-wrapper'>
                    <div className="container">
                        <div className="p-md-5 text-center mt-5">
                            <div className="row">
                                <h1 className='mb-5 text-white mt-5'>Pre Requisite</h1> 
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1800">
                                    <span className="text-white"><FontAwesomeIcon icon={faMessage} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Clarity and conciseness in messaging</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                    <span className="text-white"><FontAwesomeIcon icon={faEarListen} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Active listening abilities
                                    </p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1000">
                                    <span className="text-white"><FontAwesomeIcon icon={faPeace} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Confidence and assertiveness
                                    </p>
                                </div>
                            </div>
                            <h1 className='mb-3 text-white mt-4 text-decoration-underline'>Contact / Help</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Student Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Miss. Khushi Naik - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/ 8792860611"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Mr. Rahul Bhosale - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/6360371 259"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Faculty Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Prof. Rashmi Shetty -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/https://wa.me/9819162430"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800">Prof. Sunaina M
                                        -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="#"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                        <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800">Prof. Vaishnavi S
                                        -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="#"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='text-center p-5 darkBlue-text text-decoration-underline'>Master the Art of Communication: Harness your words, connect deeply, and leave a lasting impression in every interaction.</h4>
            </section>
            <Footer />
        </>
    )
}

export default CommDesc