import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import {
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
  import { Container, Row, Col, Card, CardBody } from "reactstrap";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Landing from '../Landing/Landing.jsx';
import './Login.css';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [backtoLanding, setBackToLanding] = useState(false);
    
    let login = (e) => {
        props.setAuth(true);
        try {
            fetch("http://localhost:8080/login", {
                mode: 'cors',
                headers: {'Content-Type': 'application/json'},
                method: "POST",
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setEmail(data.response[0].email)
                    setPassword(data.response[0].password);
                    setMessage("Logged in successfully");
                    console.log("message::", message)
                } else {
                    setMessage("log in again")
                }
            })
        } catch (err) {
            console.log("error loggin in:", err);
        }
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col />
                    <Col lg="8">
                        <Form className="form">
                            <h1>Sign In</h1>
                            <Card>
                                <CardBody>
                                    <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                        <div className="form-group mt-3">
                                            <Label for="email" className="mr-sm-2">Email</Label>
                                            <input 
                                                type = "email"
                                                className="form-control mt-1"
                                                placeholder="Enter email"
                                                onChange={(e)=>{setEmail(e.target.value)}}
                                            />
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="pb-2 mr-sm-2 mb-sm-0">
                                        <div className="form-group mt-3">
                                            <Label>Password</Label>
                                            <input 
                                                type = "password"
                                                className="form-control mt-1"
                                                placeholder="Enter password"
                                                onChange={(e)=>{setPassword(e.target.value)}}
                                            />
                                        </div>
                                        <div>
                                            <Button color="danger"
                                                    type="submit" 
                                                    className="btn btn-primary"
                                                    onClick={() => {login({email}, {password})}}>
                                                Submit
                                            </Button>
                                        </div>
                                        <p>
                                            New to Netflix?
                                            <Link to="/" >
                                                <Button variant="secondary"
                                                type="submit"
                                                className="btn btn-secondary"
                                                onClick={() => props.setSignInButton(false)}>Sign Up Now</ Button>
                                            </Link>
                                        </p>
                                    </FormGroup>
                                </CardBody>
                            </Card>
                        </Form>
                    </Col>
                    <Col />
                </Row>
            </Container>
    </div>
    )
}

export default Login;