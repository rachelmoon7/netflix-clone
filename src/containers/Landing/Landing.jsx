import React, { useState } from 'react';
// import { Switch } from 'react-router';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardBody } from "reactstrap";

import Navbar from './Navbar.jsx';

import Login from '../Login/Login.jsx';
import SignUp from '../SignUp/SignUp.jsx';

import ChooseProfile from '../ChooseProfile/ChooseProfile.jsx';


const Landing = () => {

    const [auth, setAuth] = useState(false);
    const [signInButton, setSignInButton] = useState(false);
    const [email, setEmail] = useState("");
    const [showSignUp, setShowSignUp] = useState(false);
    const [showGetStarted, setShowGetStarted] = useState(true);

    return (
        <>
            <Navbar />
            <div>
                <Container>
                {showGetStarted ? (
                <div>
                    <label className="input_id"
                            placeholder="Email address">
                        <input type="email"
                                name="email"
                                placeholder="Email address"
                                onChange={(e)=>{setEmail(e.target.value)}}></input>
                    </label>
                    <Button onClick={() => {setShowSignUp(true); setShowGetStarted(false); console.log("email:", email)}}>Get Started</Button>
                </div>
                ):(
                    null
                )}
                </Container>
            </div>

            {showSignUp ? (
                <SignUp email={email}
                        />
            ):(
                null
            )}
            
        </>

    )
}

export default Landing;