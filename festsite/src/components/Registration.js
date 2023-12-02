import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useForm } from "react-hook-form";
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';
import Navbar from './Navbar';

function Registration() {
    const [submitButton, setSubmitButton] = useState('SUBMIT');
    const [disableSubmitButton, setDisableSubmitButton] = useState(false);
    const [inputField, setInputField] = useState({
        college: "",
        facultyName: "",
        facultyNumber: "",
        paintingParticipantOne: "",
        paintingParticipantTwo: "",
        quizParticipantOne: "",
        quizParticipantTwo: "",
        gamingParticipantOne: "",
        gamingParticipantTwo: "",
        communicationParticipantOne: "",
        communicationParticipantTwo: "",
        artParticipantOne: "",
        artParticipantTwo: ""
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        setSubmitButton('LOADING...');
        setDisableSubmitButton(true);

        try {
            const connectionUrl = 'https://sheet.best/api/sheets/798ba69f-09d5-4a2e-899c-585cc5ac3e11';

            const requestBody = {
                "Name of college": data.college,
                "Faculty Incharge": data.facultyName,
                "Faculty Mobile No": data.facultyNumber,
                "Designing Participant One": data.paintingParticipantOne,
                "Designing Participant Two": data.paintingParticipantTwo,
                "Quiz Participant One": data.quizParticipantOne,
                "Quiz Participant Two": data.quizParticipantTwo,
                "Gaming Participant One": data.gamingParticipantOne,
                "Gaming Participant Two": data.gamingParticipantTwo,
                "Communication Participant One": data.communicationParticipantOne,
                "Communication Participant Two": data.communicationParticipantTwo,
                "Art Participant One": data.artParticipantOne,
                "Art Participant Two": data.artParticipantTwo

            };

            const response = await axios.post(connectionUrl, requestBody, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 200) {
                setSubmitButton('SUBMIT');
                toast.success('Team has been registered successfuly');
                reset();
                setDisableSubmitButton(false);
            } else {
                setSubmitButton('SUBMIT');
                toast.error('Sorry, something went wrong!');
                setDisableSubmitButton(false);
            }
        } catch (e) {
            setSubmitButton('SUBMIT');
            console.log(e)

            toast.error('Sorry, something went wrong!');
            setDisableSubmitButton(false);
        }
    };


    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-center mb-4">Event Registration Form</h2>
                        <ul className='border rounded p-5'>
                        <h4 className="mb-4 drakBlue-txt">General Instructions :-</h4>
                            <li>Exclusively for the PUC students.</li>
                            <li>Participants must be in venue - KLE's BCA P C Jabin Science College Hubli on 9 December, 2023 by 8:30 am.</li>
                            <li>Last Date for registration: <span className='text-danger fw-bold'>8 December, 2023.</span> </li>
                            <li>Its mandatory to register as a team of 10 participants.</li>
                            <li>Participants must be in their uniforms and carry college ID Card / Library Card.</li>
                            <li>Same participants cannot participate in more than one event.</li>
                            <li>Misconduct/Behaviour will result in immediate disqualification.</li>
                            <li>Judges' decision will be final.</li>
                            <li>The college reserves the right to make any changes if the situation demands.</li>
                            <li>Only one faculty member can accompany the team.</li>
                        </ul>

                        <form className="p-4 bg-light border" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row g-3">
                                <h3 className='text-center'>College Details</h3>
                                {/* college Details */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputcollege" className="form-label">Name Of College <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.college ? 'is-invalid' : ''}`} id="inputcollege" {...register('college', { required: true })} onChange={(e) => setInputField('college', e.target.value)} />
                                    <div className="invalid-feedback">{errors.college?.type === 'required' && 'College name is required'}</div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputfacultyName" className="form-label">Name of Faculty Incharge <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.facultyName ? 'is-invalid' : ''}`} id="inputfacultyName" {...register('facultyName', { required: true })} onChange={(e) => setInputField('facultyName', e.target.value)} />
                                    <div className="invalid-feedback">{errors.facultyName?.type === 'required' && 'Faculty name is required'}</div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputfacultyNumber" className="form-label">Faculty Incharge Mobile No <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.facultyNumber ? 'is-invalid' : ''}`} id="inputfacultyNumber" {...register('facultyNumber', { required: true })} onChange={(e) => setInputField('facultyNumber', e.target.value)} />
                                    <div className="invalid-feedback">{errors.facultyNumber?.type === 'required' && 'Faculty mobileno is required'}</div>
                                </div>

                                <h3 className='text-center mt-5 mb-3'>Digital Designing Participant</h3>
                                {/* painting Participant One */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputpaintingParticipantOne" className="form-label">Participant One <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.paintingParticipantOne ? 'is-invalid' : ''}`} id="inputpaintingParticipantOne" {...register('paintingParticipantOne', { required: true })} onChange={(e) => setInputField('paintingParticipantOne', e.target.value)} />
                                </div>
                                {/* painting Participant Two */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputpaintingParticipantTwo" className="form-label">Participant Two <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.paintingParticipantTwo ? 'is-invalid' : ''}`} id="inputpaintingParticipantTwo" {...register('paintingParticipantTwo', { required: true })} onChange={(e) => setInputField('paintingParticipantTwo', e.target.value)} />
                                </div>

                                <h3 className='text-center mt-5 mb-3'>Digital Quiz Participant</h3>
                                {/* Quiz Participant One */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputquizParticipantOne" className="form-label">Participant One <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.quizParticipantOne ? 'is-invalid' : ''}`} id="inputquizParticipantOne" {...register('quizParticipantOne', { required: true })} onChange={(e) => setInputField('quizParticipantOne', e.target.value)} />
                                </div>
                                {/* Quiz Participant Two */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputquizParticipantTwo" className="form-label">Participant Two <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.quizParticipantTwo ? 'is-invalid' : ''}`} id="inputquizParticipantTwo" {...register('quizParticipantTwo', { required: true })} onChange={(e) => setInputField('quizParticipantTwo', e.target.value)} />
                                </div>

                                <h3 className='text-center mt-5 mb-3'>Gaming Participant</h3>
                                {/* Gaming Participant One */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputgamingParticipantOne" className="form-label">Participant One <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.gamingParticipantOne ? 'is-invalid' : ''}`} id="inputgamingParticipantOne" {...register('gamingParticipantOne', { required: true })} onChange={(e) => setInputField('gamingParticipantOne', e.target.value)} />
                                </div>
                                {/* Gaming Participant Two */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputgamingParticipantTwo" className="form-label">Participant Two <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.gamingParticipantTwo ? 'is-invalid' : ''}`} id="inputgamingParticipantTwo" {...register('gamingParticipantTwo', { required: true })} onChange={(e) => setInputField('gamingParticipantTwo', e.target.value)} />
                                </div>

                                <h3 className='text-center mt-5 mb-3'>Communication Participant</h3>
                                {/* Communication Participant One */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputcommunicationParticipantOne" className="form-label">Participant One <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.communicationParticipantOne ? 'is-invalid' : ''}`} id="inputcommunicationParticipantOne" {...register('communicationParticipantOne', { required: true })} onChange={(e) => setInputField('communicationParticipantOne', e.target.value)} />
                                </div>
                                {/* Communication Participant Two */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputcommunicationParticipantTwo" className="form-label">Participant Two <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.communicationParticipantTwo ? 'is-invalid' : ''}`} id="inputcommunicationParticipantTwo" {...register('communicationParticipantTwo', { required: true })} onChange={(e) => setInputField('communicationParticipantTwo', e.target.value)} />
                                </div>

                                <h3 className='text-center mt-5 mb-3'>Digital Art Participant</h3>
                                {/* Art Participant */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputartParticipantOne" className="form-label">Participant One<span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.artParticipantOne ? 'is-invalid' : ''}`} id="inputartParticipantOne" {...register('artParticipantOne', { required: true })} onChange={(e) => setInputField('artParticipantOne', e.target.value)} />
                                </div>
                                {/* Art Participant */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputartParticipantTwo" className="form-label">Participant Two<span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.artParticipantTwo ? 'is-invalid' : ''}`} id="inputartParticipantTwo" {...register('artParticipantTwo', { required: true })} onChange={(e) => setInputField('artParticipantTwo', e.target.value)} />
                                </div>


                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" disabled={disableSubmitButton} className='btn btn-lg custom-btn'>
                                    {submitButton}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Registration;
