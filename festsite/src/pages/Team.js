import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import vipulImg from '../assets/images/vj.jpeg';
import abhiImg from '../assets/images/abhi.jpeg';
import tejImg from '../assets/images/tejas.jpeg';
import misImg from '../assets/images/miskin.jpeg';
import haryImg from '../assets/images/hary.jpeg';
import koushImg from '../assets/images/koush.jpeg';
import nagImg from '../assets/images/nagraj.jpeg';
import prajImg from '../assets/images/praj.jpeg';


const teamMembers = [
    {
        name: 'Vipul Jujar',
        image: vipulImg,
        instagram: 'https://www.instagram.com/jujar_vipul/',
        linkedin: 'https://www.linkedin.com/in/vipul-jujar-a36497189',
    },
    {
        name: 'Abhishek Bachanalli',
        image: abhiImg,
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/in/abhishek-bachanalli-7b57a9228/',
    },
    {
        name: 'Aditya Miskin',
        image: misImg,
        instagram: 'https://www.instagram.com/aduu03?utm_source=qr&r=nametag',
        linkedin: 'https://www.linkedin.com/in/aditya-m-375a54176?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
        name: 'Harshith Bhosale',
        image: haryImg,
        instagram: 'https://instagram.com/harshith_2341?utm_source=qr&igshid=MThlNWY1MzQwNA==',
        linkedin: 'https://www.linkedin.com/in/harshith-bhosale-77632024b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
        name: 'Tejas Yatnatti',
        image: tejImg,
        instagram: 'https://instagram.com/tejas_yatnatti_17?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
        linkedin: 'https://www.linkedin.com/',
    },
    {
        name: 'Kowshik Ballari',
        image: koushImg,
        instagram: 'https://www.instagram.com/koushik.1438?utm_source=qr&r=nametag',
        linkedin: 'https://www.linkedin.com/in/kowshik-k-ballari-98aab424a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
        name: 'Prajwal Pattar ',
        image: prajImg,
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/',
    },
    {
        name: 'Nagaraj Kampli ',
        image: nagImg,
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/',
    },
];

function Team() {
    return (
        <>
            <Navbar />
            <div className='team-wrapper'>
                <div className='container'>
                    <h2 className='p-4 text-center mt-3 mb-4'> WuShang Clan - a league of visionary minds, where innovation thrives and creativity reigns.</h2>
                    <div className='row'>
                        {teamMembers.map((member, index) => (
                            <div className='col-lg-3 mb-4' key={index}> {/* Added mb-4 class for margin bottom */}
                                <div className='text-center'>
                                    <img src={member.image} className='square-image mb-3' alt={member.name} /> {/* Added mb-3 class for margin bottom */}
                                    <p className='mt-0 mb-0 fs-4'>{member.name}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a href={member.instagram} className="text-decoration-none d-block px-1">
                                                <FontAwesomeIcon icon={faInstagram} size='2x' className="darkBlue-text fontAwesom" />
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href={member.linkedin} className="text-decoration-none d-block px-1">
                                                <FontAwesomeIcon icon={faLinkedin} size='2x' className="darkBlue-text fontAwesom mt-2" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Team;
