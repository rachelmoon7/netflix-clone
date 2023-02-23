import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useRoutes, useNavigate } from 'react-router-dom';

import profileImg from '../Images/profile.jpeg';
import './ChooseProfile.css'

const ChooseProfile = () => {
    return (
        <div className="chooseProfile">
            <h1>Who's watching?</h1>
            <Link to='/profile' >
                <img src={profileImg} 
                    alt='Profile' 
                    style={{ width: '50px' }}/>
            </Link>
            <div className="profile-name"> Rachel Moon</div>
        </div>
    )
}

export default ChooseProfile;