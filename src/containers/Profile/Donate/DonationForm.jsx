import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DonationForm = () => {
    const [contributor, setContributor] = useState('');
    const [amount, setAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            contributor,
            amount, 
            paymentMethod
        };

        fetch('/donate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => console.log("data from server/donate:", data))
        .catch(error => console.error(error));
    }
    return (
        <>
            <Link to='/profile'>
                <Button>Home</Button>
            </Link>
            <Form>
                <Container>
                    <Col>
                        <div>
                            <label>
                                Contributor:   
                            </label>
                            <input type="text"
                                    placeholder="Enter name"
                                    onChange={(e)=>{setContributor(e.target.value)}}>
                            </input>
                        </div>

                        <div>
                            <label>
                                Amount:   
                            </label>
                            <input type="text"
                                    placeholder="Enter amount"
                                    onChange={(e)=>{setAmount(e.target.value)}}>
                            </input>
                        </div>
                        
                        <div>
                            <label>
                                Payment Method:   
                            </label>
                            <input type="text"
                                    placeholder="Enter amount"
                                    onChange={(e)=>{setPaymentMethod(e.target.value)}}>
                            </input>
                        </div>
                    </Col>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Container>
            </Form>
        </>
    )
}

export default DonationForm;