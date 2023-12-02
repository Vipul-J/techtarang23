import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style/core.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { faArrowUpFromBracket, faAward, faBrain, faCircleExclamation, faFaceSmileBeam, faFaceSmileWink, faFaceSurprise, faFlagCheckered, faGamepad, faGun, faMugHot, faPeopleGroup, faPhone, faRightToBracket, faRunning, faShuttleSpace, faSmileWink, faSurprise, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gameImg from "../assets/images/gaming.png"

function GameDesc() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <section>
                <div className='container'>
                    <div className='p-md-5 p-3'>
                        <h1 className='text-success text-center mb-1 mt-4'>VIBHRAM - Enter the Virtual Realm</h1>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="hero-content darkBlue-text" data-aos="fade-right" data-aos-duration="1200">
                                    <p>Experience the ultimate gaming extravaganza, Immerse yourself in a dynamic fusion of physical and virtual challenges, engage in intense one-on-one combat games. Partner up for collaborative adventures  that promise to test your skills and teamwork. Get ready for an  blend of competition and camaraderie!</p>
                                    <p> So, grab your controllers and join us for an unforgettable celebration of gaming culture. Get ready to level up your gaming experience!</p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={gameImg} height={250} data-aos="fade-up" data-aos-duration="1800" className='img-ani' />
                            </div>
                        </div>
                        <h4 className='darkBlue-text'>Rules and Regulations</h4>
                        <ul>
                        <li><span class="darkBlue-text">Team should consist of 2 participants.</span></li>
    <li><span class="darkBlue-text">ID card of your college is compulsory.</span></li>
    <li><span class="darkBlue-text">Total 3 rounds will be conducted.</span></li>
                    </ul></div>
                </div>

                <div className='hero-wrapper'>
                    <div className="container">
                        <div className="p-md-5 text-center mt-5">
                            <div className="row">
                                <h1 className='mb-5 text-white mt-5'>Pre Requisite</h1>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                    <span className="text-white"><FontAwesomeIcon icon={faRunning} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Be a virtual pet with speed whenever there is need</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1000">
                                    <span className="text-white"><FontAwesomeIcon icon={faGamepad} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Controlled attitude on your controllers</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1800">
                                    <span className="text-white"><FontAwesomeIcon icon={faFaceSmileWink} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Must embrace the chaos with a smile</p>
                                </div>
                            </div>
                            <h1 className='mb-3 text-white mt-4 text-decoration-underline'>Contact / Help</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Student Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Mr. Gaurav Ganiger - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/6363594505"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Miss. Ashlesha D - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/7483517805"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Faculty Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Prof.Akhila khoday -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9886962807"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800"> Prof.Soniya G -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/9880677290"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800"> Prof.Sahana-  <a className="text-white me-3 btn btn-sm  btn-secondary" href="#"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='text-center p-5 darkBlue-text text-decoration-underline'>Join us and unleash your gaming powers,
                    Where fun meets competition, and friendships are forged</h4>
            </section>
            <Footer />
        </>
    )
}

export default GameDesc