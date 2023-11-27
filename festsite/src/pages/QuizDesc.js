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
                        <h1 className='text-success text-center mb-1 mt-4' id='quiz'> BUDDHI SAMBHASHA - The Ultimate Battle of Brains!..</h1>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="hero-content darkBlue-text" data-aos="fade-right" data-aos-duration="1200">
                                    <p> "Unleash your inner genius at Buddhi Sambhasha – the ultimate quiz experience where knowledge reigns supreme! Sharpen your wits, fuel your curiosity, and conquer the quiz stage. Get ready for a whirlwind of questions, excitement, and the thrill of victory. 
                                    </p>

                                    <p>Don't miss out on this chance to test your mental agility and claim your place among the brightest minds. Join us at the "Buddhi Sambhasha " and let the battle of intellects begin!</p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={quizImg} height={300} data-aos="fade-up" data-aos-duration="1800" className='img-ani' />
                            </div>
                        </div>
                        <h4 className='darkBlue-text'>Rules and Regulations</h4>
                        <ul>
                        <li class="darkBlue-text">Team should consist of 2 participants.</li>
    <li class="darkBlue-text">Total 3 rounds will be conducted.</li>
    <li class="darkBlue-text">No electronic devices allowed to use.</li>
    <li class="darkBlue-text">Judges' decision will be final.</li>
    <li class="darkBlue-text">Maintain sportsmanship; any malpractices result in disqualification.</li>

                        </ul>
                    </div>
                </div>

                <div className='hero-wrapper'>
                    <div className="container">
                        <div className="p-md-5 text-center mt-5">
                            <div className="row">
                                <h1 className='mb-5 text-white mt-5'>Pre Requisite</h1> 
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                    <span className="text-white"><FontAwesomeIcon icon={faLaptop} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Basic School-level Tech Knowledge</p>
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
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800">  Mr. Vipul Jujar - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9591074133"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Mr. Dhiraj Kalal  - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9148059365"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Faculty Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Prof. Hema Chikkaraddi -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9739595557"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800"> Prof. Annapurana B -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/#"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800"> Prof. Rohit D -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/#"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
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