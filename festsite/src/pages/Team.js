import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';  
import vipulImage from '../assets/images/Vipul.png';

const teamMembers = [
    {
        name: 'Michael Doe',
        role: 'Property Specialist',
        image: 'vipul'
    },
    {
        name: 'Another Name',
        role: 'Another Role',
        image: 'https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg'
    },
    {
        name: 'Michael Doe',
        role: 'Property Specialist',
        image: 'https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg'
    },
    {
        name: 'Another Name',
        role: 'Another Role',
        image: 'https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg'
    },
    {
        name: 'Michael Doe',
        role: 'Property Specialist',
        image: 'https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t1.jpg'
    },
    {
        name: 'Another Name',
        role: 'Another Role',
        image: 'https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/team/t2.jpg'
    },
    // Add more team members as needed
];

function Team() {
    return (
        <>
            <div className="py-5 team4">
                <div className="container">
                    <div className="row justify-content-center mb-4">
                        <div className="col-md-7 text-center">
                            <h3 className="mb-3">Experienced & Professional Team</h3>
                            <h6 className="subtitle">You can rely on our amazing features list and also our customer services will be a great experience for you without a doubt and in no time</h6>
                        </div>
                    </div>
                    <div className="row">
                        {teamMembers.map((member, index) => (
                            <div className="col-lg-3 mb-4" key={index}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <img src={member.image} alt={member.name} className="img-fluid rounded-circle" />
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <div className="pt-2">
                                            <h5 className="mt-4 font-weight-medium mb-0">{member.name}</h5>
                                            <h6 className="subtitle mb-3">{member.role}</h6>
                                            <p>You can rely on our amazing features list and also our customer services will be a great experience.</p>
                                            <ul className="list-inline">
                                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1">         <FontAwesomeIcon icon={faInstagram} className="darkBlue-text display-6 fontAwesom" />
                                                </a></li>
                                                <li className="list-inline-item"><a href="#" className="text-decoration-none d-block px-1">         <FontAwesomeIcon  icon={faLinkedin}className="darkBlue-text display-6 fontAwesom" />
                                                </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Team;
