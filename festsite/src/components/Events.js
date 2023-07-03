import React from 'react'
import "../assets/style/core.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faClipboardQuestion, faCode, faComment, faGamepad, faGem, faPenNib, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Events() {
    return (
        <>
            {/* Events */}
            <section className="hero-wrapper">
                <div className="p-md-5 p-3 mt-5">
                    <h1 className="text-center text-white mt-4">Events</h1>
                    <div className="container">
                        <div className="row">
                            {/* Design */}
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card card-stats mb-4 mb-xl-0" data-aos="fade-right" data-aos-duration="800">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                    <p className="font-weight-bold mb-1 darkBlue-text">Designing</p>
                                                    <span className="h2 font-weight-bold mb-0 darkBlue-text">MINERVA</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faPenNib} className="darkBlue-text display-3 fontAwesom" />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to='/designing' className='btn btn-md custom-btn mt-3'>Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Quiz */}
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card card-stats mb-4 mb-xl-0" data-aos="fade-left" data-aos-duration="1200">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Quiz</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">OMNIVILLE</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faClipboardQuestion} className="darkBlue-text display-3 fontAwesom" />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to='/quiz' className='btn btn-md custom-btn mt-3'>Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* Coding */}
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card card-stats mb-4 mb-xl-0" data-aos="fade-right" data-aos-duration="1600">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Coding</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">PARATRIX</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faCode} className="darkBlue-text display-3 fontAwesom" />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to='/coding' className='btn btn-md custom-btn mt-3'>Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Gaming */}
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card card-stats mb-4 mb-xl-0" data-aos="fade-left" data-aos-duration="1800">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Gaming</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">NETHEREALM</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faGamepad} className="darkBlue-text display-3 fontAwesom" />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to="/gaming" className='btn btn-md custom-btn mt-3'>Know More </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            {/* Best Manager */}
                            <div className="col-xl-4 col-lg-6 mt-4 " data-aos="fade-right" data-aos-duration="2200">
                                <div className="card card-stats mb-4 mb-xl-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Best Manager</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">SENTRILEGION</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faUserTie} className="darkBlue-text display-3 fontAwesom " />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to="/bestmanager" className='btn btn-md custom-btn mt-3'>Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Treasure Hunt */}
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card card-stats mb-4 mb-xl-0" data-aos="fade-left" data-aos-duration="2600">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Treasure Hunt</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">KAZANISTAN</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faGem} className="darkBlue-text display-3 fontAwesom" />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to='treasurehunt' className='btn btn-md custom-btn mt-3'>Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Photography */}
                            <div className="col-xl-4 col-lg-6 mt-4 offset-xl-2 offset-lg-3">
                                <div className="card card-stats mb-4 mb-xl-0" data-aos="fade-right" data-aos-duration="3000">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Photography</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">GRAPHOS</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faCameraRetro} className="darkBlue-text display-3 fontAwesom" />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to="/photography" className='btn btn-md custom-btn mt-3'>Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Communication */}
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card card-stats mb-4 mb-xl-0" data-aos="fade-left" data-aos-duration="3000">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Communication</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">PHANACK</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faComment} className="darkBlue-text display-3 fontAwesom" />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to='/communication' className='btn btn-md custom-btn mt-3'>Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Events