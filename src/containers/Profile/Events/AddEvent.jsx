import React, { useState, useEffect } from 'react';
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
    const [addNewEvent, setAddNewEvent] = useState(false);
    
    const handleAdd = (e) => {
        e.preventDefault(); setAddNewEvent(true)
    }
    
    useEffect(() => {
        const postData = {"name": eventName, "max_capacity": maxCapacity, "date": eventDate, "time": eventTime, "city": eventCity};
        if (eventName != '') {
        fetch('http://localhost:8080/addEvent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .then(()=> props.setNewEventAdded(true))
          .then(props.setShowAddEvent(false))
          .catch(error => console.error(error));
      }
        } , [addNewEvent]); 

    return (
       <Form>
           <div>
            <label htmlFor="name">Name:</label>
                <input
                        type="text"
                        value={eventName}
                        placeholder="Enter Event Name"
                        onChange={(e) => setEventName(e.target.value)} 
                        required
                />
            </div>

            <div>
            <label htmlFor="capacity">Max Capacity:</label>
                <input 
                        type="text"
                        value={maxCapacity}
                        placeholder="Enter Event Max Capacity"
                        onChange={(e) => setMaxCapacity(e.target.value)} 
                        required
                />
            </div>
            <div>
            <label htmlFor="date">Date:</label>
                <input
                        type="text"
                        value={eventDate}
                        placeholder="Enter Event Date"
                        onChange={(e) => setEventDate(e.target.value)} 
                        required
                />
            </div>
            <div>
            <label htmlFor="time">Time: </label>
                <input
                        type="text"
                        value={eventTime}
                        placeholder="Enter Event Time"
                        onChange={(e) => setEventTime(e.target.value)}
                        required 
                />
            </div>
            <div>
            <label htmlFor="city">City: </label>

                <input
                        type="text"
                        value={eventCity}
                        placeholder="Enter Event City"
                        onChange={(e) => setEventCity(e.target.value)} 
                        required
                />
            </div>
            <div>
                <button onClick={handleAdd} > ADD </button>
            </div>
       </Form> 
    )
}

export default AddEvent;