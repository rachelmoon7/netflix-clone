import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useRoutes } from 'react-router-dom';

import Landing from './containers/Landing/Landing.jsx';
import Login from './containers/Login/Login.jsx';
import Step1 from './containers/SignUp/Directions/Step1.jsx';
import SignUp from './containers/SignUp/SignUp.jsx';
import ChooseProfile from './containers/ChooseProfile/ChooseProfile.jsx';
import Profile from './containers/Profile/Profile.jsx';
import DonationForm from './containers/Profile/Donate/DonationForm.jsx'



const App = () => {

    return (
        <Routes>
            <>
                <Route exact path='/' element={<Landing />} />
                <Route exact path='/login' element={<Login />} />
                <Route path='/stepOne' element={<Step1 />} />
                <Route exact path='/signup' element={<SignUp />} />
                <Route exact path='/chooseProfile' element={<ChooseProfile />} />
                <Route exact path='/profile' element={<Profile />} />
                <Route path='/donate' element={<DonationForm />} />
            </>
        </Routes>
    );
}

export default App;
