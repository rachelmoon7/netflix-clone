import React, { useState, useEffect } from 'react';
import Event from './Event.jsx';
import { Container, Row, Col, Form, Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const EventList = (props) => {
    // console.log("event list props:", props.events)

    return (
        <div>
            {/* {console.log("??", events)} */}
            {props.events.map(event => (
                
                <Container>
                    <Card>
                        <CardBody>
                            <Event name={event.name}
                                max_capacity={event.max_capacity}
                                city={event.city}
                                time={event.time}
                                date={event.date}  />
                        </CardBody>
                    </Card>
                </Container>
                
            ))}
        </div>
    );
}

export default EventList;