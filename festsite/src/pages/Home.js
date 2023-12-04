import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { faAward, faFaceSurprise, faFlagCheckered, faPeopleGroup, faPhone, faShuttleSpace, faSmileWink, faSurprise, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImg from "../assets/images/hero-img.png"
import Events from '../components/Events';
 
function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            {/* Hero */}
            <section className="hero-wrapper">
                <div className="p-md-5 p-3  ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="hero-content">
                                    <h4>KLES BCA, Hubballi  presents</h4>
                                    <h1 className="hero-title mt-0 mb-0 display-2" data-aos="fade-right" data-aos-duration="2000">ABHIGYAN 1.0</h1>
                                    <p className='mt-0 fs-5'>Nurturing wisdom , Fostering Excellence</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img src={heroImg} alt="Hero Image" className='img-fluid img-ani' data-aos="fade-left" data-aos-duration="2600" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section className='about-wrapper' id='about'>
                <div className="p-md-5 p-3">
                    <div className="container">
                        <h1 className="text-center darkBlue-text">What is AbhiGyan 1.0?</h1>
                        <p className='fs-6 text-center fw-normal darkBlue-text' data-aos="fade-in" data-aos-duration="2000"><span className='fs-3 fw-bolder text-success'>Abhigyan 1.0,</span>   PU Fest features riveting sub
                            events : a challenging quiz, competitive
                            gaming, creative digital art, effective
                            communication, and an impressive digital designing.
                            Participants showcase their intellect in the
                            quiz, gaming skills, artistic prowess, creative designs and
                            communication finesse. This festival is a
                            melting pot of diverse talents, fostering a
                            dynamic and inclusive environment for
                            participants to engage, compete, and
                            celebrate their multifaceted abilities</p>
                    </div>
                    <div className='text-center'>
                        {/* <a href='' className='btn btn-md custom-btn mb-4'>Download Brochure</a> */}
                    </div>
                </div>
                <div className="container">
                    <div className="border kpi rounded p-md-5 text-center">
                        <div className="row">
                            <div className="col-sm" data-aos="zoom-in" data-aos-duration="800">
                                <span className="darkBlue-Bg"><FontAwesomeIcon icon={faFlagCheckered} size="5x" /></span>
                                <p className="h5 mt-2 mb-4 darkBlue-text">5 Events</p>
                            </div>
                            <div className="col-sm" data-aos="zoom-in" data-aos-duration="1000">
                                <span className="darkBlue-Bg"><FontAwesomeIcon icon={faPeopleGroup} size="5x" /></span>
                                <p className="h5 mt-2 mb-4 darkBlue-text">20+ Teams</p>
                            </div>
                            <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                <span className="darkBlue-Bg"><FontAwesomeIcon icon={faAward} size="5x" /></span>
                                <p className="h5 mt-2 mb-4 darkBlue-text">10 Winners</p>
                            </div>
                            <div className="col-sm" data-aos="zoom-in" data-aos-duration="1800">
                                <span className="darkBlue-Bg"><FontAwesomeIcon icon={faTrophy} size="5x" /></span>
                                <p className="h5 mt-2 mb-4 darkBlue-text">1 General Championship</p>
                            </div>
                        </div>
                        <div className="container">
                            <div className="container" id='teaser'>
                                <div className="d-flex justify-content-center mt-4 mb-4 darkBlue-text">
                                    <h1>AbhiGyan 1.0 Teaser</h1>
                                </div>
                                <div className="ratio ratio-21x9 mb-4" data-aos="fade-up" data-aos-duration="2000">
                                    <iframe className='mobile-iframe' width="560" height="315" src="https://www.youtube.com/embed/irMtJgdPdTM"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Events />

            {/* register */}
            <section className="jumbotron jumbotron-fluid  p-3" id="registration">
                <div className="container" id="#home">
                    <div className="text-center darkBlue-text mt-4 mb-4">
                      <h1 className='text-decoration-underline'>REGISTRATION</h1>  
                        <h1 className="p-3">
                        Get ready to dive into the wave of technology and business, expand your horizons, and be part of something extraordinary at Abhigyan 1.0
                        </h1>
                        <Link to="/registration" className="btn btn-md btn-danger" role="button">Register Now</Link> 
                    </div>
                </div>
            </section>

            {/* Contact */}
            <div className='hero-wrapper' id='contact'>
                <div className="container">
                    <div className="p-md-5 text-center mt-5">
                        <div className="row">
                            <h1 className='mb-3 mt-4 text-white text-decoration-underline'>Contact / Help</h1>
                            <div className="col-lg-6">
                                <h3 className='text-white mt-3'>Student Event Coordinator : </h3>
                                <h6 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Mr. Abhishek Bachanalli - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9845135061"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h6>
                                <h6 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Miss. Muskan Dafedar - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/8867899280"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h6>
                            </div>
                            <div className="col-lg-6">
                                <h3 className='text-white mt-3'>Faculty Event Coordinators : </h3>
                                <h6 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Prof. Sushma Naikar -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/7026096111"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h6>
                                <h6 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800"> Prof. Maheshrao Koppal -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9986646633"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home