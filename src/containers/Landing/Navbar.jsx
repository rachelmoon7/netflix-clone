import React, {useState} from 'react';
import { Button } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route, Link, useRoutes, useNavigate } from 'react-router-dom';

import Login from '../Login/Login.jsx';
import SignUp from '../SignUp/SignUp.jsx';
import ChooseProfile from '../ChooseProfile/ChooseProfile.jsx';
import './Navbar.css';

const Navbar = () => {

    const [auth, setAuth] = useState(false);
    // const [signInButton, setSignInButton] = useState(false);
    // const [showSignUp, setShowSignUp] = useState(false);
    // const [showGetStarted, setShowGetStarted] = useState(true);

    return (
        <>
        <h1> NETFLIX CLONE </h1>
        <nav className="navBar">
            {auth ? (
                    <ChooseProfile />
                ) : (
                    <Link to='/login'>
                        <Button variant="danger">Sign In</Button>
                    </Link>
                )}
        </nav>
        
        </>
    )
}

export default Navbar
