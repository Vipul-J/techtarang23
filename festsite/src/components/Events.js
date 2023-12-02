import React from 'react'
import "../assets/style/core.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faClipboardQuestion, faCode, faComment, faCommentAlt, faComments, faGamepad, faGem, faPaintBrush, faPenNib, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

function Events() {
    return (
        <>
            {/* Events */}
            <section className="hero-wrapper">
                <div className="p-md-5 p-3 mt-5">
                    <h1 className="text-center text-white mt-4" id="events">Events</h1>
                    <div className="container">
                        <div className="row">
                            {/* Art */}
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card card-stats mb-4 mb-xl-0" data-aos="fade-right" data-aos-duration="800">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Digital Art</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">TANTRA KALA</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faPenNib} className="darkBlue-text display-3 fontAwesom" />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to='/art' className='btn btn-md custom-btn mt-3'>Know More</Link>
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
                                                <p className="font-weight-bold mb-1 darkBlue-text">Digital Quiz</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">BRUHAMANCH</span>
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
                            {/* Communication */}
                            <div className="col-xl-4 col-lg-6 mt-4">
                                <div className="card card-stats mb-4 mb-xl-0" data-aos="fade-right" data-aos-duration="1600">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Communication</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">SAMPRAVADANA</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faComments} className="darkBlue-text display-3 fontAwesom" />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to='/communication' className='btn btn-md custom-btn mt-3'>Know More</Link>
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
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">VIBHRAM</span>
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
                            {/* Painting */}
                            <div className="col-xl-4 col-lg-6 mt-4 " data-aos="fade-right" data-aos-duration="2200">
                                <div className="card card-stats mb-4 mb-xl-0">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col">
                                                <p className="font-weight-bold mb-1 darkBlue-text">Digital Designing</p>
                                                <span className="h2 font-weight-bold mb-0 darkBlue-text">ALANKRUTA</span>
                                            </div>
                                            <div className="col-auto">
                                                <div className="icon icon-shape rwt-txt-light-blue">
                                                    <FontAwesomeIcon icon={faPaintBrush} className="darkBlue-text display-3 fontAwesom " />
                                                </div>
                                            </div>
                                            <div className='text-center'>
                                                <Link to="/painting" className='btn btn-md custom-btn mt-3'>Know More</Link>
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