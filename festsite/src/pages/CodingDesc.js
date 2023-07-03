import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style/core.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { faArrowUpFromBracket, faAward, faBrain, faCircleExclamation, faFaceSmileBeam, faFaceSmileWink, faFaceSurprise, faFlagCheckered, faMugHot, faPeopleGroup, faPhone, faRightToBracket, faShuttleSpace, faSmileWink, faSurprise, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import codeImg from "../assets/images/coding.png"

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
                        <h1 className='text-success text-center mb-1 mt-4'>PARATRIX - Igniting Innovation, Empowering Ecosystem</h1>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="hero-content darkBlue-text" data-aos="fade-right" data-aos-duration="1200">
                                    <p>Embrace the world of coding and conquer your fears at our special coding event tailored for beginners!
                                        Are you curious about the power of programming but feel <span className='fw-bolder text-success'>hesitant</span> to take the first step? Don't worry! This event is designed to  <span className='fw-bolder text-success'>empower</span> students with no prior programming knowledge and eradicate any fears that may be holding you back.</p>

                                    <p>This opportunity is a safe space for you to <span className='fw-bolder text-success'>explore, experiment, and learn </span>at your own pace.</p> <p className='fw-bolder text-success text-center'>We believe that anyone can become a programmer, regardless of their background or initial knowledge.</p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={codeImg} className='img-fluid img-ani' data-aos="fade-up" data-aos-duration="1800"/>
                            </div>
                        </div>
                        <h4 className='darkBlue-text'>Rules and Regulations</h4>
                        <ul>
                        <li className='darkBlue-text'>Two participants from each team (1 junior and 1 senior) are mandatory.</li>
                        <li className='darkBlue-text'>Total number of rounds played are three.</li>
                        <li className='darkBlue-text'>Laptop with
Installed editors like VsCode, Eclipse, Figma, Dev C++ is mandatory</li>
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
                                    <span className="text-white"><FontAwesomeIcon icon={faMugHot} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Coffee addiction: optional, but highly recommended.</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                    <span className="text-white"><FontAwesomeIcon icon={faCircleExclamation} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Zero programming experience, but a willingness to laugh and learn</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1000">
                                    <span className="text-white"><FontAwesomeIcon icon={faBrain} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Semi-colon mastery: not required, but appreciated.</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1800">
                                    <span className="text-white"><FontAwesomeIcon icon={faFaceSmileWink} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Must embrace the chaos of curly braces and parentheses with a smile</p>
                                </div>
                            </div>
                            <h1 className='mb-3 text-white mt-4 text-decoration-underline'>Contact / Help</h1>
                            <div className="row"> 
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Student Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Mr. Vipul Jujar - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9591074133"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Mr. Rahul Aili - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9880937463"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Faculty Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Prof. Hema Chikkaraddi -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9739595557"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800"> Prof. Sharada MulkiPatil -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9449680932"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='text-center p-5 darkBlue-text text-decoration-underline'>Why participate? Because coding is the closest thing to having a superpower. Forget about flying or invisibility; we're talking about creating something out of nothing with just lines of code!</h4>
            </section>
            <Footer />
        </>
    )
}

export default CodingDesc