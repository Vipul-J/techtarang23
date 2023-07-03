import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style/core.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { faArrowUpFromBracket, faAward, faBrain, faCircleExclamation, faClock, faFaceSmileBeam, faFaceSmileWink, faFaceSurprise, faFlagCheckered, faGamepad, faGun, faMugHot, faPeopleGroup, faPhone, faRightToBracket, faRunning, faShuttleSpace, faSmileWink, faSurprise, faTimeline, faTimes, faTimesCircle, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { faIntercom, faMeetup, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import managerImg from "../assets/images/manager.png"

function BestmDesc() {
    useEffect(() => {
        AOS.init();
    }, []);
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Navbar />
            <section>
                <div className='container'>
                    <div className='p-md-5 p-3'>
                        <h1 className='text-success text-center mb-1 mt-4'>SENTRILEGION - Leader's Quest</h1>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className="hero-content darkBlue-text" data-aos="fade-right" data-aos-duration="1200">
                                    <p>"A good manager is not a person who can do the work better than his men; he is a person who can get his men to do the work better than he can.”– Frederick W. Smith
</p>
                                    <p> Most employees would do anything to earn the opportunity to become a manager. But why? What makes them yearn to earn this tag?

Ironically, many aspiring managers do not care to dig deep and find out what makes a good manager.</p>
                                </div>
                            </div>
                            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
                                <img src={managerImg} height={300} data-aos="fade-up" data-aos-duration="1800" className='img-ani' />
                            </div>
                        </div>
                        <h4 className='darkBlue-text'>Rules and Regulations</h4>
                        <ul className='darkBlue-text'>
                        <li className='darkBlue-text'>Phones are not allowed. Participants should not bring or use mobile devices.</li>
  <li className='darkBlue-text'>Participants should bring pen and paper for the event.</li>
  <li className='darkBlue-text'>Participants must be in corporate dress attire.</li>
                        </ul>
                        
                    </div>
                </div>

                <div className='hero-wrapper'>
                    <div className="container">
                        <div className="p-md-5 text-center mt-5">
                            <div className="row">
                                <h1 className='mb-5 text-white mt-5'>Pre Requisite</h1>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="800">
                                    <span className="text-white"><FontAwesomeIcon icon={faMeetup} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Display strong interpersonal skills, including the ability to collaborate</p>
                                </div> 
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1800">
                                    <span className="text-white"><FontAwesomeIcon icon={faIntercom} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Aalyze situations and make sound decisions.</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1400">
                                    <span className="text-white"><FontAwesomeIcon icon={faUser} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Demonstrate ethical behavior and a strong sense of responsibility</p>
                                </div>
                                <div className="col-sm" data-aos="zoom-in" data-aos-duration="1000">
                                    <span className="text-white"><FontAwesomeIcon icon={faClock} size="5x" /></span>
                                    <p className="h5 mt-2 mb-4 text-white">Exhibit effective time management skills</p>
                                </div>
                            </div>
                            <h1 className='mb-3 text-white mt-4 text-decoration-underline'>Contact / Help</h1>
                            <div className="row">
                                <div className="col-lg-6">
                                <h2 className='text-white mt-3'>Student Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Miss. Sherly Seedarla - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/6364842923"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Mr. Shrihari Katti - <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/8904805118"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5></div>
                                <div className="col-lg-6">
                                    <h2 className='text-white mt-3'>Faculty Coordinator : </h2>
                                    <h5 className='text-white' data-aos="zoom-in" data-aos-duration="800"> Prof. Pooja Karjagi -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/7795762697"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                    <h5 className='text-white mb-4' data-aos="zoom-in" data-aos-duration="800">Prof. Uttara Revankar
 -  <a className="text-white me-3 btn btn-sm  btn-secondary" href="https://wa.me/8296653752"><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='text-center p-5 darkBlue-text text-decoration-underline'>Unlock your managerial prowess and vie for the title of the Best Manager! Join us and showcase your leadership, communication, and problem-solving skills in this thrilling event.</h4>
            </section>
            <Footer />
        </>
    )
}

            export default BestmDesc