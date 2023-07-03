import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style/core.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { faArrowUpFromBracket, faAward, faBrain, faCircleCheck, faCircleExclamation, faClipboardList, faCode, faFaceSmileBeam, faFaceSmileWink, faFaceSurprise, faFlagCheckered, faLaptop, faMugHot, faPeopleGroup, faPhone, faRightToBracket, faShuttleSpace, faSmileWink, faSurprise, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import quizImg from "../assets/images/quiz.png"

function CodingDesc() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <section>
                <div className='container'>
                    <div className='p-md-5 p-3'>
                        <h1 className='text-success text-center mb-1 mt-4'>OMNIVILLE - The Ultimate Battle of Brains!..</h1>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="hero-content darkBlue-text" data-aos="fade-right" data-aos-duration="1200">
                                    <p>The "Brainstorm Quiz Challenge" is an exhilarating and intellectually stimulating event that will put your knowledge and quick thinking to the test. It's the ultimate showdown of wits and intelligence where participants compete against each other to be crowned the quiz champions!
                                    </p>

                                    <p>Don't miss out on this chance to test your mental agility and claim your place among the brightest minds. Join us at the "OMNIVILLE " and let the battle of intellects begin!</p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={quizImg} height={300} data-aos="fade-up" data-aos-duration="1800" className='img-ani' />
                            </div>
                        </div>
                        <h4 className='darkBlue-text'>Rules and Regulations</h4>
                        <ul>
                            <li className='darkBlue-text'>Two participants from each team (1 junior and 1 senior) are mandatory.</li>
                            <li className='darkBlue-text'>A laptop is required for each team with a good internet connection.</li>
                            <li className='darkBlue-text'>Total number of rounds played are three.</li>
                            <li className='darkBlue-text'>Round 1 and 2 will have a time limit.</li>
                            <li className='darkBlue-text'>Negative marking is done only in the Final (3rd) round.</li>
                            <li className='darkBlue-text'>Judges' decision is final.</li>
                            <li className='darkBlue-text'>Discipline must be maintained throughout the event.</li>
                        </ul>
                    </div>
                </div>

                <div className='hero-wrapper'>
                    <div className="container">
                        <div className="p-md-5 text-center mt-5">
                            <div className="row">
                                <h1 className='mb-5 text-white mt-5'>Pre Requisite</h1>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="800">
                                    <span className="text-white"><FontAwesomeIcon icon={faCode} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Knowledge of java and python( Binary and ASCII conversions)</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                    <span className="text-white"><FontAwesomeIcon icon={faLaptop} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Laptop with internet connection</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1000">
                                    <span className="text-white"><FontAwesomeIcon icon={faCircleCheck} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Good knowledge of logos</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1800">
                                    <span className="text-white"><FontAwesomeIcon icon={faClipboardList} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Updations on current affairs.</p>
                                </div>
                            </div>
                            <h1 className='mb-3 text-white mt-4 text-decoration-underline'>Contact / Help</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Student Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Miss. Prananjali Marathe - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9880099013"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Mr. Sharath G  - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/8296274643"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Faculty Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Prof. Sushma Naikar -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/7026096111"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800"> Prof. Tejaswini Apte -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9591451736"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='text-center p-5 darkBlue-text text-decoration-underline'>Prepare to embark on a thrilling journey through a wide range of topics. </h4>
            </section>
            <Footer />
        </>
    )
}

export default CodingDesc