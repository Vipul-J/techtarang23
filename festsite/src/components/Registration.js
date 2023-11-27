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
        paintingParticipantOne: "",
        paintingParticipantTwo: "",
        quizParticipantOne: "",
        quizParticipantTwo: "", 
        gamingParticipantOne: "",
        gamingParticipantTwo: "",
        communicationParticipantOne: "",
        communicationParticipantTwo: "", 
        artParticipant: ""
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const onSubmit = async (data) => {
        setSubmitButton('LOADING...');
        setDisableSubmitButton(true);

        try {
            const connectionUrl = 'https://sheet.best/api/sheets/4aaae7b8-2ce3-4b60-9fc1-24a0b8b418ae';   

            const requestBody = {
                "Name of college": data.college,
                "Painting Participant One": data.paintingParticipantOne,
                "Painting Participant Two": data.paintingParticipantTwo,
                "Quiz Participant One": data.quizParticipantOne,
                "Quiz Participant Two": data.quizParticipantTwo, 
                "Gaming Participant One": data.gamingParticipantOne,
                "Gaming Participant Two": data.gamingParticipantTwo,
                "Communication Participant One": data.communicationParticipantOne,
                "Communication Participant Two": data.communicationParticipantTwo, 
                "Art Participant": data.artParticipant
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
                        <form className="p-4 bg-light border" onSubmit={handleSubmit(onSubmit)}>
                            <div className="row g-3">
                                {/* college NAME */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputcollege" className="form-label">Name Of College <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.college ? 'is-invalid' : ''}`} id="inputcollege" {...register('college', { required: true })} onChange={(e) => setInputField('college', e.target.value)} />
                                    <div className="invalid-feedback">{errors.college?.type === 'required' && 'Participant One is required'}</div>
                                </div>
                                
                                {/* painting Participant One */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputpaintingParticipantOne" className="form-label">Painting Participant One <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.paintingParticipantOne ? 'is-invalid' : ''}`} id="inputpaintingParticipantOne" {...register('paintingParticipantOne', { required: true })} onChange={(e) => setInputField('paintingParticipantOne', e.target.value)} />
                                    <div className="invalid-feedback">{errors.paintingParticipantOne?.type === 'required' && 'Participant One is required'}</div>
                                </div>
                                {/* painting Participant Two */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputpaintingParticipantTwo" className="form-label">Painting Participant Two <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.paintingParticipantTwo ? 'is-invalid' : ''}`} id="inputpaintingParticipantTwo" {...register('paintingParticipantTwo', { required: true })} onChange={(e) => setInputField('paintingParticipantTwo', e.target.value)} />
                                    <div className="invalid-feedback">{errors.paintingParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
                                </div>

                                {/* Quiz Participant One */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputquizParticipantOne" className="form-label">Quiz Participant One <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.quizParticipantOne ? 'is-invalid' : ''}`} id="inputquizParticipantOne" {...register('quizParticipantOne', { required: true })} onChange={(e) => setInputField('quizParticipantOne', e.target.value)} />
                                    <div className="invalid-feedback">{errors.quizParticipantOne?.type === 'required' && 'Participant One is required'}</div>
                                </div>
                                {/* Quiz Participant Two */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputquizParticipantTwo" className="form-label">Quiz Participant Two <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.quizParticipantTwo ? 'is-invalid' : ''}`} id="inputquizParticipantTwo" {...register('quizParticipantTwo', { required: true })} onChange={(e) => setInputField('quizParticipantTwo', e.target.value)} />
                                    <div className="invalid-feedback">{errors.quizParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
                                </div> 

                                {/* Gaming Participant One */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputgamingParticipantOne" className="form-label">Gaming Participant One <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.gamingParticipantOne ? 'is-invalid' : ''}`} id="inputgamingParticipantOne" {...register('gamingParticipantOne', { required: true })} onChange={(e) => setInputField('gamingParticipantOne', e.target.value)} />
                                    <div className="invalid-feedback">{errors.gamingParticipantOne?.type === 'required' && 'Participant One is required'}</div>
                                </div>
                                {/* Gaming Participant Two */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputgamingParticipantTwo" className="form-label">Gaming Participant Two <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.gamingParticipantTwo ? 'is-invalid' : ''}`} id="inputgamingParticipantTwo" {...register('gamingParticipantTwo', { required: true })} onChange={(e) => setInputField('gamingParticipantTwo', e.target.value)} />
                                    <div className="invalid-feedback">{errors.gamingParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
                                </div>
                               
                                {/* Communication Participant One */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputcommunicationParticipantOne" className="form-label">Communication Participant One <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.communicationParticipantOne ? 'is-invalid' : ''}`} id="inputcommunicationParticipantOne" {...register('communicationParticipantOne', { required: true })} onChange={(e) => setInputField('communicationParticipantOne', e.target.value)} />
                                    <div className="invalid-feedback">{errors.communicationParticipantOne?.type === 'required' && 'Participant One is required'}</div>
                                </div>
                                {/* Communication Participant Two */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputcommunicationParticipantTwo" className="form-label">Communication Participant Two <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.communicationParticipantTwo ? 'is-invalid' : ''}`} id="inputcommunicationParticipantTwo" {...register('communicationParticipantTwo', { required: true })} onChange={(e) => setInputField('communicationParticipantTwo', e.target.value)} />
                                    <div className="invalid-feedback">{errors.communicationParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
                                </div>
                               
                                {/* Art Participant */}
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                    <label htmlFor="inputartParticipant" className="form-label">Art Participant <span className="text-danger">*</span></label>
                                    <input type="text" className={`form-control ${errors.artParticipant ? 'is-invalid' : ''}`} id="inputartParticipant" {...register('artParticipant', { required: true })} onChange={(e) => setInputField('artParticipant', e.target.value)} />
                                    <div className="invalid-feedback">{errors.artParticipant?.type === 'required' && 'Participant is required'}</div>
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
