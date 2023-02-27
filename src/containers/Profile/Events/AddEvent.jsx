import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap';

import {
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';

const AddEvent = (props) => {
    const [eventName, setEventName] = useState('');
    const [maxCapacity, setMaxCapacity] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventCity, setEventCity] = useState('');

    const location = useLocation();
    console.log("??", location)
    // const setEvents = location.state.setEvents;
    const handlSubmit = () => {

    }

    return (
       <Form>
           <div>
                <input
                        type="text"
                        value={eventName}
                        placeholder="Enter Event Name"
                        onChange={( (e) => setEventName(e.target.value))} 
                />
            </div>
            <div>
                <input
                        type="text"
                        value={maxCapacity}
                        placeholder="Enter Event Max Capacity"
                        onChange={( (e) => setMaxCapacity(e.target.value))} 
                />
            </div>
            <div>
                <input
                        type="text"
                        value={eventDate}
                        placeholder="Enter Event Date"
                        onChange={( (e) => setEventDate(e.target.value))} 
                />
            </div>
            <div>
                <input
                        type="text"
                        value={eventTime}
                        placeholder="Enter Event Time"
                        onChange={( (e) => setEventTime(e.target.value))} 
                />
            </div>
            <div>
                <input
                        type="text"
                        value={eventCity}
                        placeholder="Enter Event City"
                        onChange={( (e) => setEventCity(e.target.value))} 
                />
            </div>
            <div>
                <Button onClick={handlSubmit} > ADD</Button>
            </div>
       </Form> 
    )
}

export default AddEvent;