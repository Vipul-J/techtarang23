// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import { useForm } from "react-hook-form";
// import 'react-toastify/dist/ReactToastify.css';
// import Footer from './Footer';
// import Navbar from './Navbar';

// function Registration() {
//     const [submitButton, setSubmitButton] = useState('SUBMIT');
//     const [disableSubmitButton, setDisableSubmitButton] = useState(false);
//     const [InputFields, setInputFields] = useState({
//         house: "",
//         designingParticipantOne: "",
//         designingParticipantTwo: "",
//         quizParticipantOne: "",
//         quizParticipantTwo: "",
//         codingParticipantOne: "",
//         codingParticipantTwo: "",
//         gamingParticipantOne: "",
//         gamingParticipantTwo: "",
//         communicationParticipantOne: "",
//         communicationParticipantTwo: "",
//         treasureHuntParticipantOne: "",
//         treasureHuntParticipantTwo: "",
//         photographyParticipantOne: "",
//         photographyParticipantTwo: "",
//         bestManagerParticipant: ""
//     });

//     const { register, handleSubmit, formState: { errors } } = useForm();


//     const onSubmit = async (data) => {
//         setSubmitButton('LOADING...');
//         setDisableSubmitButton(true);

//         try {
//             const connectionUrl = 'https://sheet.best/api/sheets/54f36bfa-c0b0-4deb-9f9b-fad1a9836bd8'; // Replace with your connection URL

//             const requestBody = {
//                 "Name of house": data.house,
//                 "Designing Participant One": data.designingParticipantOne,
//                 "Designing Participant Two": data.designingParticipantTwo,
//                 "Quiz Participant One": data.quizParticipantOne,
//                 "Quiz Participant Two": data.quizParticipantTwo,
//                 "Coding Participant One": data.codingParticipantOne,
//                 "Coding Participant Two": data.codingParticipantTwo,
//                 "Gaming Participant One": data.gamingParticipantOne,
//                 "Gaming Participant Two": data.gamingParticipantTwo,
//                 "Communication Participant One": data.communicationParticipantOne,
//                 "Communication Participant Two": data.communicationParticipantTwo,
//                 "TreasureHunt Participant One": data.treasureHuntParticipantOne,
//                 "TreasureHunt Participant Two": data.treasureHuntParticipantTwo,
//                 "Photography Participant One": data.photographyParticipantOne,
//                 "Photography Participant Two": data.photographyParticipantTwo,
//                 "Best Manager Participant": data.bestManagerParticipant
//             };

//             const response = await axios.post(connectionUrl, requestBody, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });

//             if (response.status === 200) {
//                 setSubmitButton('SUBMIT');
//                 toast.info('Score has been recorded');
//                 reset();
//                 setDisableSubmitButton(false);
//             } else {
//                 setSubmitButton('SUBMIT');
//                 toast.error('Sorry, something went wrong!');
//                 setDisableSubmitButton(false);
//             }
//         } catch (e) {
//             setSubmitButton('SUBMIT');
//             toast.error('Sorry, something went wrong!');
//             setDisableSubmitButton(false);
//         }
//     };


//     return (
//         <>
//             <Navbar />
//             <div className="container mt-4">
//                 <div className="row">
//                     <div className="col-12">
//                         <h2 className="text-center mb-4">Event Registration Form</h2>
//                         <form className="p-4 bg-light border" onSubmit={handleSubmit(onSubmit)}>
//                             <div className="row g-3">
//                                 {/* HOUSE NAME */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputHouse" className="form-label">Name Of House <span className="text-danger">*</span></label>
//                                     <select className={`form-select ${errors.house ? 'is-invalid' : ''}`} id="inputHouse" {...register('house', { required: true })} onChange={(e) => setHouseName(e.target.value)}>
//                                         <option value="">Select House</option>
//                                         <option value="Coral">Coral</option>
//                                         <option value="Voilet">Voilet</option>
//                                         <option value="Peach">Peach</option>
//                                     </select>
//                                     <div className="invalid-feedback">{errors.house?.type === 'required' && 'House Name is required'}</div>
//                                 </div>
//                                 {/* Designing Participant One */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputdesigningParticipantOne" className="form-label">Designing Participant One <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.designingParticipantOne ? 'is-invalid' : ''}`} id="inputdesigningParticipantOne" {...register('designingParticipantOne', { required: true })} onChange={(e) => setInputField('designingParticipantOne', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.designingParticipantOne?.type === 'required' && 'Participant One is required'}</div>
//                                 </div>
//                                 {/* Designing Participant Two */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputdesigningParticipantTwo" className="form-label">Designing Participant Two <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.designingParticipantTwo ? 'is-invalid' : ''}`} id="inputdesigningParticipantTwo" {...register('designingParticipantTwo', { required: true })} onChange={(e) => setInputField('designingParticipantTwo', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.designingParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
//                                 </div>
//                                 {/* Quiz Participant One */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputquizParticipantOne" className="form-label">Quiz Participant One <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.quizParticipantOne ? 'is-invalid' : ''}`} id="inputquizParticipantOne" {...register('quizParticipantOne', { required: true })} onChange={(e) => setInputField('quizParticipantOne', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.quizParticipantOne?.type === 'required' && 'Participant One is required'}</div>
//                                 </div>
//                                 {/* Quiz Participant Two */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputquizParticipantTwo" className="form-label">Quiz Participant Two <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.quizParticipantTwo ? 'is-invalid' : ''}`} id="inputquizParticipantTwo" {...register('quizParticipantTwo', { required: true })} onChange={(e) => setInputField('quizParticipantTwo', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.quizParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
//                                 </div>
//                                 {/* Coding Participant One */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputcodingParticipantOne" className="form-label">Coding Participant One <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.codingParticipantOne ? 'is-invalid' : ''}`} id="inputcodingParticipantOne" {...register('codingParticipantOne', { required: true })} onChange={(e) => setInputField('codingParticipantOne', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.codingParticipantOne?.type === 'required' && 'Participant One is required'}</div>
//                                 </div>
//                                 {/* Coding Participant Two */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputcodingParticipantTwo" className="form-label">Coding Participant Two <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.codingParticipantTwo ? 'is-invalid' : ''}`} id="inputcodingParticipantTwo" {...register('codingParticipantTwo', { required: true })} onChange={(e) => setInputField('codingParticipantTwo', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.codingParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
//                                 </div>
//                                 {/* Gaming Participant One */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputgamingParticipantOne" className="form-label">Gaming Participant One <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.gamingParticipantOne ? 'is-invalid' : ''}`} id="inputgamingParticipantOne" {...register('gamingParticipantOne', { required: true })} onChange={(e) => setInputField('gamingParticipantOne', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.gamingParticipantOne?.type === 'required' && 'Participant One is required'}</div>
//                                 </div>
//                                 {/* Gaming Participant Two */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputgamingParticipantTwo" className="form-label">Gaming Participant Two <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.gamingParticipantTwo ? 'is-invalid' : ''}`} id="inputgamingParticipantTwo" {...register('gamingParticipantTwo', { required: true })} onChange={(e) => setInputField('gamingParticipantTwo', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.gamingParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
//                                 </div>
//                                 {/* Communication Participant One */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputcommunicationParticipantOne" className="form-label">Communication Participant One <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.communicationParticipantOne ? 'is-invalid' : ''}`} id="inputcommunicationParticipantOne" {...register('communicationParticipantOne', { required: true })} onChange={(e) => setInputField('communicationParticipantOne', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.communicationParticipantOne?.type === 'required' && 'Participant One is required'}</div>
//                                 </div>
//                                 {/* Communication Participant Two */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputcommunicationParticipantTwo" className="form-label">Communication Participant Two <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.communicationParticipantTwo ? 'is-invalid' : ''}`} id="inputcommunicationParticipantTwo" {...register('communicationParticipantTwo', { required: true })} onChange={(e) => setInputField('communicationParticipantTwo', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.communicationParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
//                                 </div>
//                                 {/* Treasure Hunt Participant One */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputtreasureHuntParticipantOne" className="form-label">Treasure Hunt Participant One <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.treasureHuntParticipantOne ? 'is-invalid' : ''}`} id="inputtreasureHuntParticipantOne" {...register('treasureHuntParticipantOne', { required: true })} onChange={(e) => setInputField('treasureHuntParticipantOne', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.treasureHuntParticipantOne?.type === 'required' && 'Participant One is required'}</div>
//                                 </div>
//                                 {/* Treasure Hunt Participant Two */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputtreasureHuntParticipantTwo" className="form-label">Treasure Hunt Participant Two <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.treasureHuntParticipantTwo ? 'is-invalid' : ''}`} id="inputtreasureHuntParticipantTwo" {...register('treasureHuntParticipantTwo', { required: true })} onChange={(e) => setInputField('treasureHuntParticipantTwo', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.treasureHuntParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
//                                 </div>
//                                 {/* Photography Participant One */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputphotographyParticipantOne" className="form-label">Photography Participant One <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.photographyParticipantOne ? 'is-invalid' : ''}`} id="inputphotographyParticipantOne" {...register('photographyParticipantOne', { required: true })} onChange={(e) => setInputField('photographyParticipantOne', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.photographyParticipantOne?.type === 'required' && 'Participant One is required'}</div>
//                                 </div>
//                                 {/* Photography Participant Two */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputphotographyParticipantTwo" className="form-label">Photography Participant Two <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.photographyParticipantTwo ? 'is-invalid' : ''}`} id="inputphotographyParticipantTwo" {...register('photographyParticipantTwo', { required: true })} onChange={(e) => setInputField('photographyParticipantTwo', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.photographyParticipantTwo?.type === 'required' && 'Participant Two is required'}</div>
//                                 </div>
//                                 {/* Best Manager Participant */}
//                                 <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
//                                     <label htmlFor="inputbestManagerParticipant" className="form-label">Best Manager Participant <span className="text-danger">*</span></label>
//                                     <input type="text" className={`form-control ${errors.bestManagerParticipant ? 'is-invalid' : ''}`} id="inputbestManagerParticipant" {...register('bestManagerParticipant', { required: true })} onChange={(e) => setInputField('bestManagerParticipant', e.target.value)} />
//                                     <div className="invalid-feedback">{errors.bestManagerParticipant?.type === 'required' && 'Participant is required'}</div>
//                                 </div>
//                             </div>
//                             <div className="text-center mt-4">
//                                 <button type="submit" disabled={disableSubmitButton}>
//                                     {submitButton}
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//             <ToastContainer />
//         </>
//     );
// };

// export default Registration;
