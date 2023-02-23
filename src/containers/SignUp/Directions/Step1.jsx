import React from 'react';
import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Card, CardBody } from "reactstrap";



const Step1 = () => {
    const location = useLocation();
    const { email } = location.state
 
    return (
        <Container style={{
            display: "block",
            width: 900,
            padding: 30
          }}>
            <Row style={{
        display: "block",
        width: 900,
        padding: 30
      }}>
                <Col style={{
        display: "block",
        width: 900,
        padding: 200
      }}>
                    <div>
                        <p>STEP 1 OF 3</p>
                        <div>Choose your plan.</div>
                        <div>No commitments, cancel anytime.</div>
                        <div>Endless entertainment for one low price.</div>
                        <div>Unlimited viewing on all your devices.</div>
                        <Link to="/signUp" 
                                state={{ email: { email }.email }}>
                            <Button variant="danger">Next</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default Step1;