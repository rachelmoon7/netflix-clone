import React from 'react';
import { Container, Row, Col, Form, Card, CardBody } from "reactstrap";

const DonationForm = () => {
    return (
        <Form>
            <Container>
                <Col>
                    <div>
                        <label>
                            Contributor:   
                        </label>
                        <input type="text"
                                placeholder="Enter name">
                        </input>
                    </div>

                    <div>
                        <label>
                            Amount:   
                        </label>
                        <input type="text"
                                placeholder="Enter amount">
                        </input>
                    </div>
                    
                    <div>
                        <label>
                            Payment Method:   
                        </label>
                        <input type="text"
                                placeholder="Enter amount">
                        </input>
                    </div>
                </Col>
            </Container>
        </Form>
    )
}

export default DonationForm;