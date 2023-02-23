import React, { useState } from 'react';
// import { Switch } from 'react-router';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
  import { Container, Row, Col, Form, Card, CardBody } from "reactstrap";

import Navbar from './Navbar.jsx';
import './Landing.css';


import Login from '../Login/Login.jsx';
import SignUp from '../SignUp/SignUp.jsx';

import ChooseProfile from '../ChooseProfile/ChooseProfile.jsx';
import image from "../Images/LandingBackground.jpeg"; 

const Landing = () => {

    const [auth, setAuth] = useState(false);
    const [signInButton, setSignInButton] = useState(false);
    const [email, setEmail] = useState("");
    const [showSignUp, setShowSignUp] = useState(false);
    const [showGetStarted, setShowGetStarted] = useState(true);

    return (
        <div style={{ 
                    backgroundImage: `url(${image})` 
                    }}>
            <Navbar />
            
            <Container>
                
                <Row>
                    <Col />
                    <Form size="lg">
                        <Card>
                            <CardBody>
                                <Container>
                                    {showGetStarted ? (
                                    <div>
                                        <div id="text">
                                            <h2>
                                                Unlimited movies, TV shows, and more.
                                            </h2>
                                            <h3>Watch anywhere. Cancel anytime.</h3>
                                            <span>Ready to watch? Enter your email to create or restart your membership.</span>
                                        </div>
                                        <label className="input_id"
                                                placeholder="Email address">
                                            <input type="email"
                                                    name="email"
                                                    placeholder="Email address"
                                                    onChange={(e)=>{setEmail(e.target.value)}}></input>
                                        </label>
                                        <Link to='/stepOne'
                                            state={{ email: email }} >
                                            <Button onClick={() => {setShowSignUp(true); setShowGetStarted(false); console.log("email:", email)}}>Get Started</Button>
                                        </Link>
                                    </div>
                                    ):(
                                        null
                                    )}
                            
                                    {showSignUp ? (
                                        <SignUp email={email}
                                                />
                                    ):(
                                        null
                                    )}
                                </Container>
                            </CardBody>
                        </Card>
                    </Form>
                </Row>
            </Container>
        </div>    
    )
}

export default Landing;