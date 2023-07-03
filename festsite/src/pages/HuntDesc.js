import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style/core.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { faArrowUpFromBracket, faAward, faBrain, faCircleExclamation, faFaceSmileBeam, faFaceSmileWink, faFaceSurprise, faFlagCheckered, faMobileAlt, faMugHot, faPenAlt, faPeopleGroup, faPhone, faRightToBracket, faShuttleSpace, faSmileWink, faSurprise, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import huntImg from "../assets/images/treasure.png"

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
                        <h1 className='text-success text-center mb-1 mt-4'>KAZANISTAN - The Hunt Is On, Dig For The Gold!</h1>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="hero-content darkBlue-text" data-aos="fade-right" data-aos-duration="1200">
                                    <p>A game in which people try to find a hidden treasure with the help of  clues which have been left in different places.
                                        Where each person or team attempts to be first in finding something that has been hidden, using written directions.
                                        Encourages leadership,  communication and interaction. Teamwork is vital to solve the clues.
                                        The first team to solve all the clues and find the treasure  is declared the winner.</p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={huntImg} height={250} data-aos="fade-up" data-aos-duration="1800" className='img-ani' />
                            </div>
                        </div>
                        <h4>Rules and Regulations</h4>
                        <ul>
                            <li classname='darkBlue-text'>One junior and one senior should participate in this event.</li>
                            <li classname='darkBlue-text'>Can use one mobile, only under volunteers supervision.</li>
                            <li classname='darkBlue-text'>Task should be completed in the given period of time.</li>
                            <li classname='darkBlue-text'>Do not cause any damage while playing, be careful.</li>
                            <li classname='darkBlue-text'>Discipline should be maintained.</li>
                        </ul>
                    </div>
                </div>

                <div className='hero-wrapper'>
                    <div className="container">
                        <div className="p-md-5 text-center mt-5">
                            <div className="row">
                                <h1 className='mb-5 text-white mt-5'>Pre Requisite</h1>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="800">
                                    <span className="text-white"><FontAwesomeIcon icon={faPenAlt} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">A Pen and Paper</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                    <span className="text-white"><FontAwesomeIcon icon={faMobileAlt} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">One mobile for a team</p>
                                </div>
                            </div>
                            <h1 className='mb-3 text-white mt-4 text-decoration-underline'>Contact / Help</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Student Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Miss.Shreyaswini Bhat - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/7338484373"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800">Mr.Manjunath Kale - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/6362465040"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Faculty Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Prof. Jyoti Konadavar -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9739595557"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800"> Prof. Ravi Walikar
                                        -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/8892552993"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='text-center p-5 darkBlue-text text-decoration-underline'>The hunt is on!
                    Dig for Gold!
                    Follow the clues!</h4>
            </section>
            <Footer />
        </>
    )
}

export default CodingDesc